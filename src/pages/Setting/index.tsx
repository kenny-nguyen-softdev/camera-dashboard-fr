import { PageTitle } from "../../components/Common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { VideoCameraAddOutlined } from "@ant-design/icons";

import Logo from "../../assets/images/img_user.jpg";
import SettingList from "../../components/SettingList";
import useAuthContext from "../../store/auth-context";

const Setting = () => {
    const { profile } = useAuthContext();
    return (
      <>
        <PageTitle>Setting Page</PageTitle>
        <div className="setting-page">
          <div className="setting-page__title">
            <span className="setting-page__icon-title">
              <VideoCameraAddOutlined />
            </span>
            <h2>Cài đặt</h2>
            <div className="setting-page__icons">
              <span className="setting-page__icon-container">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="setting-page__search-icon"
                  width={20}
                  height={20}
                />
              </span>
              <span className="setting-page__icon-container">
                <FontAwesomeIcon
                  icon={faBell}
                  className="setting-page__bell-icon"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <div className="setting-page__separator">|</div>
            <div className="setting-page__user">
              <p className="setting-page__user-name">{profile?.name}</p>
              <img
                src={Logo}
                alt="logo"
                className="setting-page__user-avatar"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        <SettingList />
      </>
    );
  };
export default Setting;