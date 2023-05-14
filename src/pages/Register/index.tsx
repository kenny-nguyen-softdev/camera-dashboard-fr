import { PageTitle } from "../../components/Common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { VideoCameraAddOutlined } from "@ant-design/icons";

import Logo from "../../assets/images/img_user.jpg";
import RegisterList from "../../components/RegisterList";
import useAuthContext from "../../store/auth-context";

const Register = () => {
    const { profile } = useAuthContext();
    return (
      <>
        <PageTitle>Register Page</PageTitle>
        <div className="register-page">
          <div className="register-page__title">
            <span className="register-page__icon-title">
              <VideoCameraAddOutlined />
            </span>
            <h2>Đăng kí</h2>
            <div className="register-page__icons">
              <span className="register-page__icon-container">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="register-page__search-icon"
                  width={20}
                  height={20}
                />
              </span>
              <span className="register-page__icon-container">
                <FontAwesomeIcon
                  icon={faBell}
                  className="register-page__bell-icon"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <div className="register-page__separator">|</div>
            <div className="register-page__user">
              <p className="register-page__user-name">{profile?.name}</p>
              <img
                src={Logo}
                alt="logo"
                className="register-page__user-avatar"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        <RegisterList />
      </>
    );
  };
export default Register;