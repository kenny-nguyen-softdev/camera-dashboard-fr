import  {SortDescendingOutlined, FilterOutlined } from '@ant-design/icons'
import { Spinner } from '../Common';
import { useEffect, useState } from 'react';
import { notification } from 'antd';
import { cameraService } from '../../services';

const StatisticList: React.FC = () => {
    const [dataList, setDataList] = useState<any[] | null>([]);
    const [isLoading, setIsLoading] = useState<boolean | null>(true);

    useEffect(() => {
      getDataList();
    }, []);

    const getDataList = async () => {
      try {
        setIsLoading(true);
        const result: any[] | null = await cameraService.getStatistic();
        setDataList(result);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        notification.error({
          message: "Error",
          description: error,
        });
      }
    };

    if (isLoading === true) {
      return <Spinner />;
    }

  return (
    <div className="statistic-list">
      <div className="statistic-list__title">
        Thống kê
        <div className="statistic-list__sort">
          <SortDescendingOutlined className="statistic-list__sort-icon" />
          <p className="statistic-list__sort-title">Sort</p>
        </div>
        <div className="statistic-list__filter">
          <FilterOutlined className="statistic-list__filter-icon" />
          <p className="statistic-list__filter-title">Filter</p>
        </div>
      </div>

      <div className="statistic-list__table">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="row-checkbox" />
              </th>
              <th>Profile</th>
              <th>Khu vực</th>
              <th>Serial</th>
              <th data-type="datetime">Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {dataList?.map((item) => (
              <tr>
                <td key={item.id}>
                  <input type="checkbox" className="row-checkbox" />
                </td>
                <td>{item.profile}</td>
                <td>{item.khuvuc}</td>
                <td>{item.serial}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatisticList;
