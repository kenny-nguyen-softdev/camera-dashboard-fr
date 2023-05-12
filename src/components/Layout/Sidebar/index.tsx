import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  VideoCameraOutlined,
  WarningOutlined,
  BorderOuterOutlined,
  ContactsOutlined,
  SettingOutlined,
  AppstoreAddOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import Logo from "../../../assets/images/logo.png";
import { NavLink, useLocation } from "react-router-dom";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <figure className="login-page__logo-sidebar">
        <img src={Logo} alt="logo" />
      </figure>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />} className={location.pathname === '/home' ? 'active' : ''}>
          <NavLink to="/home">Trang chủ</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />} className={location.pathname === '/camera' ? 'active' : ''}>
          <NavLink to="/camera">Quản lý Camera</NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<WarningOutlined />} className={location.pathname === '/warning' ? 'active' : ''}>
          <NavLink to="/warning">Cảnh báo</NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<BorderOuterOutlined />} className={location.pathname === '/region' ? 'active' : ''}>
          <NavLink to="/region">Khu vực</NavLink>
        </Menu.Item>
        <Menu.Item key="5" icon={<LineChartOutlined />} className={location.pathname === '/statistic' ? 'active' : ''}>
          <NavLink to="/statistic">Thống kê</NavLink>
        </Menu.Item>
        <Menu.Item key="6" icon={<ContactsOutlined />} className={location.pathname === '/contact' ? 'active' : ''}>
          <NavLink to="/contact">Liên hệ</NavLink>
        </Menu.Item>
        <Menu.Item key="7" icon={<SettingOutlined />} className={location.pathname === '/setting' ? 'active' : ''}>
          <NavLink to="/setting">Cài đặt</NavLink>
        </Menu.Item>
        <Menu.Item key="8" icon={<AppstoreAddOutlined />} className={location.pathname === '/register' ? 'active' : ''}>
          <NavLink to="/register">Đăng kí</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default Sidebar;
