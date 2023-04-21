import { PageTitle } from "../../components/Common";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

import { VideoCameraAddOutlined, CheckCircleFilled, DeleteFilled, SettingFilled } from "@ant-design/icons";

import Logo from "../../assets/images/img_user.jpg";
import WarningList from "../../components/WarningList";

const Camera = () => {
  return (
    <>
      <PageTitle>Warning Page</PageTitle>
      <div className="warning-page">
        <div className="warning-page__title">
          <span className="warning-page__icon-title">
            <VideoCameraAddOutlined />
          </span>
          <h2>Cảnh báo</h2>
          <div className="warning-page__icons">
            <span className="warning-page__icon-container">
              <FontAwesomeIcon
                icon={faSearch}
                className="warning-page__search-icon"
                width={20}
                height={20}
              />
            </span>
            <span className="warning-page__icon-container">
              <FontAwesomeIcon
                icon={faBell}
                className="warning-page__bell-icon"
                width={20}
                height={20}
              />
            </span>
          </div>
          <div className="warning-page__separator">|</div>
          <div className="warning-page__user">
            <p className="warning-page__user-name">NguyenNhuSam</p>
            <img
              src={Logo}
              alt="logo"
              className="warning-page__user-avatar"
              width={30}
              height={30}
            />
          </div>
        </div>

        <div className='warning-list__operation'>
            <ul>
                <li>
                    <CheckCircleFilled className='warning-list__check-icon'/>
                    Đánh dấu đã đọc
                </li>
                <li>
                    <DeleteFilled className='warning-list__delete-icon'/>
                    Xóa thông báo
                </li>
                <li>
                    <SettingFilled className='warning-list__setting-icon'/>
                    Cài đặt cảnh báo
                </li>
            </ul>
        </div>

      </div>
      <WarningList />
    </>
  );
};

export default Camera;
