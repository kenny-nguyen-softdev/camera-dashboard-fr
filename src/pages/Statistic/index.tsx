import { PageTitle } from "../../components/Common";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

import { VideoCameraAddOutlined } from "@ant-design/icons";

import Logo from "../../assets/images/img_user.jpg";
import StatisticList from "../../components/StatisticList";

const Statistic = () => {
  return (
    <>
      <PageTitle>Statistic Page</PageTitle>
      <div className="camera-page">
        <div className="camera-page__title">
          <span className="camera-page__icon-title">
            <VideoCameraAddOutlined />
          </span>
          <h2>Khu vực</h2>
          <div className="camera-page__icons">
            <span className="camera-page__icon-container">
              <FontAwesomeIcon
                icon={faSearch}
                className="camera-page__search-icon"
                width={20}
                height={20}
              />
            </span>
            <span className="camera-page__icon-container">
              <FontAwesomeIcon
                icon={faBell}
                className="camera-page__bell-icon"
                width={20}
                height={20}
              />
            </span>
          </div>
          <div className="camera-page__separator">|</div>
          <div className="camera-page__user">
            <p className="camera-page__user-name">NguyenNhuSam</p>
            <img
              src={Logo}
              alt="logo"
              className="camera-page__user-avatar"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <StatisticList />
    </>
  );
};

export default Statistic;
