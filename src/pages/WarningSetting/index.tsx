import { VideoCameraAddOutlined } from "@ant-design/icons";
import { PageTitle } from "../../components/Common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/img_user.jpg";
import WarningSettingForm from "../../components/WarningSettingForm";

const WarningSetting = () => {
  return (
    <>
      <PageTitle>Cài đặt cảnh báo</PageTitle>
      <div className="setting-page">
        <div className="setting-page__title">
          <span className="setting-page__icon-title">
            <VideoCameraAddOutlined />
          </span>
          <h2>Cài đặt cảnh báo</h2>
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
            <p className="setting-page__user-name">NguyenNhuSam</p>
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
      <WarningSettingForm />
    </>
  );;
};

export default WarningSetting;
