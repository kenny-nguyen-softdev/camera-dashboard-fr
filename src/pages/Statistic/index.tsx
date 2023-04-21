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
      <div className="statistic-page">
        <div className="statistic-page__title">
          <span className="statistic-page__icon-title">
            <VideoCameraAddOutlined />
          </span>
          <h2>Thống kê</h2>
          <div className="statistic-page__icons">
            <span className="statistic-page__icon-container">
              <FontAwesomeIcon
                icon={faSearch}
                className="statistic-page__search-icon"
                width={20}
                height={20}
              />
            </span>
            <span className="statistic-page__icon-container">
              <FontAwesomeIcon
                icon={faBell}
                className="statistic-page__bell-icon"
                width={20}
                height={20}
              />
            </span>
          </div>
          <div className="statistic-page__separator">|</div>
          <div className="statistic-page__user">
            <p className="statistic-page__user-name">NguyenNhuSam</p>
            <img
              src={Logo}
              alt="logo"
              className="statistic-page__user-avatar"
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
