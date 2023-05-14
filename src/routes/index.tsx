import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { AppRouteType } from "../models";
import { Spinner } from "../components/Common";
import BasePage from "../components/Layout/BasePage/BasePage";
import useAuthContext from "../store/auth-context";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Camera = lazy(() => import("../pages/Camera"));
const Warning = lazy(() => import("../pages/Warning"));
const Region = lazy(() => import("../pages/Region"));
const Statistic = lazy(() => import("../pages/Statistic"));
const Contact = lazy(() => import("../pages/Contact"));
const Setting = lazy(() => import("../pages/Setting"));
const Register = lazy(() => import("../pages/Register"));
const WarningSetting = lazy(() => import("../pages/WarningSetting"));

const waitFor = (Tag: React.LazyExoticComponent<() => JSX.Element | null>) => (
  <Suspense fallback={<Spinner />}>
    <Tag />
  </Suspense>
);

export const routes: AppRouteType[] = [
  {
    name: "Login",
    auth: false,
    path: "/login",
    component: Login,
  },
  {
    name: "Home",
    auth: true,
    path: "/home",
    component: Home,
  },
  {
    name: "Camera",
    auth: true,
    path: "/camera",
    component: Camera,
  },
  {
    name: "Warning",
    auth: true,
    path: "/warning",
    component: Warning,
  },
  {
    name: "Region",
    auth: true,
    path: "/region",
    component: Region,
  },
  {
    name: "Statistic",
    auth: true,
    path: "/statistic",
    component: Statistic,
  },
  {
    name: "Contact",
    auth: true,
    path: "/contact",
    component: Contact,
  },
  {
    name: "Setting",
    auth: true,
    path: "/setting",
    component: Setting,
  },
  {
    name: "Register",
    auth: true,
    path: "/register",
    component: Register,
  },
  {
    name: "WarningSetting",
    auth: true,
    path: "/warning-setting",
    component: WarningSetting,
  },
];

const landingRoute = routes.find(
  (route) => route.name === "Home"
) as AppRouteType;
export const landingPage = landingRoute;

export default function RoutesAppRoutes() {
  const { idToken } = useAuthContext();

  const publicRoutes = routes
    .filter((route) => !route.auth || route.isPublic)
    .map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={waitFor(route.component)}
      />
    ));

  // public routes
  if (!idToken) return <Routes>{publicRoutes}</Routes>;

  // authenticated routes
  const authenticatedRoutes = routes
    .filter((route) => route.auth || route.isPublic)
    .map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={waitFor(route.component)}
      />
    ));

  return (
    <BasePage>
      <Routes>{authenticatedRoutes}</Routes>
    </BasePage>
  );
}
