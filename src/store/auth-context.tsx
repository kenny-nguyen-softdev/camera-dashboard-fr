import {
  useState,
  useContext,
  useEffect,
  createContext,
  ReactNode,
} from "react";
import moment from "moment";
import { routes } from "../routes";
import { accountService } from "../services";
import { Spinner } from "../components/Common";
import { AppRouteType, DynamicObject, QboAccount } from "../models";
import { landingPage } from "../routes";
import {
  createSearchParams,
  matchPath,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  getAccessToken,
  getAuthenticationResult,
  getRefreshToken,
  removeToken,
  setToken,
} from "../services/token.service";

function useMergeState<Payload>(
  initialState: Payload
): [state: Payload, setMergedState: Function] {
  const [state, setState] = useState<Payload>(initialState);
  const setMergedState = (newState: DynamicObject<any>) =>
    setState((prevState) => ({ ...prevState, ...newState }));
  return [state, setMergedState];
}

interface AuthContextType {
  isFirstLoading: boolean;
  loading: boolean;
  accessToken: null | string | undefined;
  idToken: null | string | undefined;
  profile: null | QboAccount;
  isAuth: boolean;
  onSignIn: (credentials: { email: string; password: string }) => Promise<any>;
  onSignOut: () => void;
  onRefreshToken: () => void;
  getProfile: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isFirstLoading: true,
  loading: false,
  accessToken: null,
  idToken: null,
  profile: null,
  isAuth: false,
  onSignIn: () => Promise.resolve(),
  onSignOut: () => {},
  onRefreshToken: () => {},
  getProfile: () => {},
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const tokenStorage = getAuthenticationResult();

  const [userData, setUserData] = useMergeState({
    isFirstLoading: true,
    loading: false,
    idToken: tokenStorage?.IdToken,
    accessToken: tokenStorage?.AccessToken,
    isAuth: false,
    profile: null,
  });

  const currentPage = routes?.find((_: AppRouteType) =>
    matchPath(_.path, location.pathname) ? true : false
  );

  const onSignIn = async (credentials: { email: string; password: string }) => {
    try {
      setUserData({ loading: true });
      const { AuthenticationResult } = await accountService.signIn(credentials);
      setSearchParams(searchParams);
      setToken(AuthenticationResult);
      setUserData({
        accessToken: AuthenticationResult.AccessToken,
        idToken: AuthenticationResult.IdToken,
      });
    } catch (error: any) {
      setUserData({ isFirstLoading: false, loading: false });
      throw new Error(error);
    }
  };

  const onRefreshToken = async () => {
    try {
      const refreshToken = getRefreshToken();
      const { AuthenticationResult } = await accountService.refreshToken(
        refreshToken
      );
      setToken(AuthenticationResult);
      setUserData({
        accessToken: AuthenticationResult.AccessToken,
        idToken: AuthenticationResult.IdToken,
      });
    } catch (error: any) {
      setUserData({ isFirstLoading: false, loading: false });
      throw new Error(error);
    }
  };

  const getProfile = async () => {
    try {
      setUserData({ loading: true });
      const user = await accountService.profile({
        accessToken: getAccessToken(),
      });
      setUserData({
        isFirstLoading: false,
        loading: false,
        profile: user,
        isAuth: true,
      });
      if (currentPage?.name === "Login") {
        navigate(landingPage?.path, { replace: true });
      }
    } catch (error: any) {
      onSignOut();
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (userData?.idToken) {
        onRefreshToken();
      }
    }, 1000 * 60 * 60 * 10);
    return () => clearInterval(intervalId);
  }, [userData?.idToken]);

  useEffect(() => {
    if (!userData?.idToken) {
      setUserData({ isFirstLoading: false });
    }

    if (!currentPage) {
      navigate(landingPage?.path, { replace: true });
    }
    if (!userData?.idToken && currentPage?.auth) {
      setUserData({ isFirstLoading: false });
      navigate("/login", { replace: true }); // If not authenticated, force log in
    }
    if (userData?.idToken && !userData.profile) {
      const tokenStorage = getAuthenticationResult();
      if (
        tokenStorage?.LoginDate &&
        tokenStorage?.LoginDate <
          moment().add(-10, "hours").format("YYYY-MM-DD HH:mm:ss")
      ) {
        onRefreshToken();
      }
      getProfile();
    }
  }, [userData?.idToken, currentPage]);

  useEffect(() => {
    if (userData?.idToken && userData?.profile) {
      // check permission
      if (currentPage?.roles) {
        navigate("/404", { replace: true });
      } else if (!currentPage?.auth && !currentPage?.isPublic) {
        // if already signed in, auto redirect to homepage if accesss to non-auth page
        navigate(landingPage?.path, { replace: true });
      }
    }
  }, [userData?.idToken, userData?.profile, currentPage]);

  const onSignOut = async () => {
    try {
      if (userData?.profile) {
        const accessToken = getAccessToken();
        await accountService.signOut({ accessToken });
      }
    } catch (error) {}
    setUserData({
      isFirstLoading: false,
      loading: false,
      accessToken: null,
      idToken: null,
      isAuth: false,
      profile: null,
    });
    removeToken();
    const tokenQuery = searchParams.get("token");
    navigate(
      {
        pathname: "/login",
        search: tokenQuery
          ? createSearchParams({
              token: tokenQuery,
            }).toString()
          : "",
      },
      { replace: true }
    );
  };

  return (
    <AuthContext.Provider
      value={{
        onSignIn,
        onSignOut,
        getProfile,
        onRefreshToken,
        isFirstLoading: userData.isFirstLoading,
        loading: userData.loading,
        accessToken: userData.accessToken,
        idToken: userData.idToken,
        profile: userData.profile,
        isAuth: userData.isAuth,
      }}
    >
      {userData?.isFirstLoading || currentPage?.roles ? <Spinner /> : children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
