import { useEffect, useState } from 'react';
import  {SortDescendingOutlined, FilterOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchRegions, selectRegionsLoading, selectRegions } from '../../store/slices/account.slices';
import { Spinner } from '../Common';
import { notification } from 'antd';
import { Region } from '../../models';

const RegionList: React.FC = () => {
  const dispatch = useAppDispatch();
  const regions: Region[] = useAppSelector(selectRegions);
  const [isLoading, setIsLoading] = useState<boolean | null>(true);
  const regionsLoading = useAppSelector(selectRegionsLoading);

  useEffect(() => {
        getRegionList();
    }, [])

  const getRegionList = async () => {
        await dispatch(fetchRegions())
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

    if (isLoading === true || regionsLoading === "pending") {
      return <Spinner />;
    }

  return (
    <div className="region-list">
      <div className="region-list__title">
        Home
        <div className="region-list__sort">
          <SortDescendingOutlined className="region-list__sort-icon" />
          <p className="region-list__sort-title">Sort</p>
        </div>
        <div className="region-list__filter">
          <FilterOutlined className="region-list__filter-icon" />
          <p className="region-list__filter-title">Filter</p>
        </div>
      </div>

      <div className="region-list__table">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="row-checkbox" />
              </th>
              <th>ID</th>
              <th>Serial</th>
              <th>Profile</th>
              <th>Activate</th>
            </tr>
          </thead>
          <tbody>
            {regions.map((region) => (
              <tr key={region.id}>
                <td>
                  <input type="checkbox" className="row-checkbox" />
                </td>
                <td>{region.id}</td>
                <td>{region.serial}</td>
                <td>{region.name}</td>
                <td>{region.activate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegionList;
