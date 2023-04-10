import { Col, Row } from "antd";
import { PageTitle } from "../../components/Common";
import VideoDisplay from "../../components/Common/VideoDisplay";

const Home = () => {
    const streamUrl = "https://youtu.be/Ph-SMrIGeJo";
  return (
    <>
      <PageTitle>Home Page</PageTitle>
      <main className="home-page">
        <div className="home-page__container">
          <div className="home-page__">
            <Row className="home-page__box">
              <Col span={12} className="name-box">Tổng Camera</Col>
              <h2>4</h2>
            </Row>
            <Row>
              <Col span={12}>
                <VideoDisplay streamUrl={streamUrl} />
              </Col>
              <Col span={12}>
                <VideoDisplay streamUrl={streamUrl} />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <VideoDisplay streamUrl={streamUrl} />
              </Col>
              <Col span={12}>
                <VideoDisplay streamUrl={streamUrl} />
              </Col>
            </Row>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
