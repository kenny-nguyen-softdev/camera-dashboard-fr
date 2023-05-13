import { PageTitle } from "../../components/Common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import Logo from "../../assets/images/img_user.jpg";
import ContactList from "../../components/ContactList";
import useAuthContext from "../../store/auth-context";

const Contact = () => {
  const { profile } = useAuthContext();

    return (
      <>
        <PageTitle>Contact Page</PageTitle>
        <div className="contact-page">
          <div className="contact-page__title">
            <span className="contact-page__icon-title">
              <VideoCameraAddOutlined />
            </span>
            <h2>Liên hệ</h2>
            <div className="contact-page__icons">
              <span className="contact-page__icon-container">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="contact-page__search-icon"
                  width={20}
                  height={20}
                />
              </span>
              <span className="contact-page__icon-container">
                <FontAwesomeIcon
                  icon={faBell}
                  className="contact-page__bell-icon"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <div className="contact-page__separator">|</div>
            <div className="contact-page__user">
              <p className="contact-page__user-name">{profile?.name}</p>
              <img
                src={Logo}
                alt="logo"
                className="contact-page__user-avatar"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        <ContactList />
      </>
    );
  };
export default Contact;