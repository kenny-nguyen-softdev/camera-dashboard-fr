import { Layout, theme, Row, Col, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
const { Header } = Layout;

const MainHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header className="main-header" style={{ background: colorBgContainer }}>
      <Row>
        <Col span={12} className="main-header__left-col">
          <Breadcrumb
            items={[
              {
                href: "/home",
                title: <HomeOutlined />,
              },
              {
                title: <h1>Trang Chủ</h1>,
              },
            ]}
          />
        </Col>
        <Col span={12}>

        </Col>
      </Row>
    </Header>
  );
};
export default MainHeader;
