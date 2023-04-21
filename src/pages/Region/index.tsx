import { PageTitle } from "../../components/Common";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

import { VideoCameraAddOutlined } from "@ant-design/icons";

import Logo from "../../assets/images/img_user.jpg";
import RegionList from "../../components/RegionList";

const Region = () => {
  return (
    <>
      <PageTitle>Region Page</PageTitle>
      <div className="region-page">
        <div className="region-page__title">
          <span className="region-page__icon-title">
            <VideoCameraAddOutlined />
          </span>
          <h2>Khu vực</h2>
          <div className="region-page__icons">
            <span className="region-page__icon-container">
              <FontAwesomeIcon
                icon={faSearch}
                className="region-page__search-icon"
                width={20}
                height={20}
              />
            </span>
            <span className="region-page__icon-container">
              <FontAwesomeIcon
                icon={faBell}
                className="region-page__bell-icon"
                width={20}
                height={20}
              />
            </span>
          </div>
          <div className="region-page__separator">|</div>
          <div className="region-page__user">
            <p className="region-page__user-name">NguyenNhuSam</p>
            <img
              src={Logo}
              alt="logo"
              className="region-page__user-avatar"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <RegionList />
    </>
  );
};

export default Region;
