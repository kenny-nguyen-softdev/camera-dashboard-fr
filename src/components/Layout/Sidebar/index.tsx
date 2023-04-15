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
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

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
        <img src={Logo} alt="logo" width={200} height={160} />
      </figure>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Trang Chủ
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Quản lí Camera
        </Menu.Item>
        <Menu.Item key="3" icon={<WarningOutlined />}>
          Cảnh báo
        </Menu.Item>
        <Menu.Item key="4" icon={<BorderOuterOutlined />}>
          Khu vực
        </Menu.Item>
        <Menu.Item key="5" icon={<LineChartOutlined />}>
          Thống kê
        </Menu.Item>
        <Menu.Item key="6" icon={<ContactsOutlined />}>
          Liên hệ
        </Menu.Item>
        <Menu.Item key="7" icon={<SettingOutlined />}>
          Cài đặt
        </Menu.Item>
        <Menu.Item key="8" icon={<AppstoreAddOutlined />}>
          Đăng kí
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default Sidebar;
