import { Col, Row, notification } from "antd";
import { PageTitle, Spinner } from "../../components/Common";
import VideoDisplay from "../../components/Common/VideoDisplay";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchCameras, selectCameras, selectCamerasLoading } from "../../store/slices/account.slices";
import { useState, useEffect } from 'react';
import { Camera } from "../../models";

const Home = () => {
  const dispatch = useAppDispatch();
  const cameras: Camera[] = useAppSelector(selectCameras);
  const [isLoading, setIsLoading] = useState<boolean | null>(true);
  const camerasLoading = useAppSelector(selectCamerasLoading);

  useEffect(() => {
    getCameraList();
  }, []);

  const getCameraList = async () => {
    await dispatch(fetchCameras())
      .unwrap()
      .then(() => {
        setIsLoading(false);
      })
      .catch((error: any) => {
        setIsLoading(false);
        notification.error({
          message: "Error",
          description: error?.message,
        });
      });
  };

  if (isLoading === true || camerasLoading === "pending") {
    return <Spinner />;
  }

  return (
    <>
      <PageTitle>Home Page</PageTitle>
      <main className="home-page">
        <div className="home-page__container">
          <div className="home-page__">
            <Row className="home-page__box">
              <Col span={12} className="name-box">
                Tổng Camera
              </Col>
              <h2>{cameras.length}</h2>
            </Row>
            <Row className="ant-row-videos">
              {cameras.map((camera) => (
                <Col span={12}>
                  <div className="home-page__video-display">
                    <VideoDisplay streamUrl={camera.url} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
