import { useEffect, useState } from 'react';
import  {SortDescendingOutlined, FilterOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCameras, selectCameras, selectCamerasLoading } from '../../store/slices/account.slices';
import { notification } from 'antd';
import { Camera } from '../../models';
import { Spinner } from '../Common';

const CameraList: React.FC = () => {
    const dispatch = useAppDispatch();
    const cameras: Camera[] = useAppSelector(selectCameras);
    const [isLoading, setIsLoading] = useState<boolean | null>(true);
    const camerasLoading = useAppSelector(selectCamerasLoading);

    useEffect(() => {
        getCameraList();
    }, [])

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
    }

    if (isLoading === true || camerasLoading === "pending") {
      return <Spinner />;
    }

    return (
      <div className="camera-list">
        <div className="camera-list__title">
          Camera
          <div className="camera-list__sort">
            <SortDescendingOutlined className="camera-list__sort-icon" />
            <p className="camera-list__sort-title">Sort</p>
          </div>
          <div className="camera-list__filter">
            <FilterOutlined className="camera-list__filter-icon" />
            <p className="camera-list__filter-title">Filter</p>
          </div>
        </div>

        <div className="camera-list__table">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" className="row-checkbox" />
                </th>
                <th>Serial</th>
                <th>Home ID</th>
                <th>Status</th>
                <th>Region</th>
              </tr>
            </thead>
            <tbody>
              {cameras.map((camera) => (
                <tr key={camera.id}>
                  <td>
                    <input type="checkbox" className="row-checkbox" />
                  </td>
                  <td>{camera.serial}</td>
                  <td>{camera.home_id}</td>
                  <td>{camera.status ? "active" : "deactive"}</td>
                  <td>{camera.region.activate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default CameraList;