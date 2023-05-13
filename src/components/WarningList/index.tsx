import { useEffect, useState } from "react";
import { SortDescendingOutlined, FilterOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../store";
import { Spinner } from "../Common";
import { fetchWarnings, selectWarnings, selectWarningsLoading } from "../../store/slices/account.slices";
import { Warning } from "../../models";
import { notification } from "antd";

const WarningList: React.FC = () => {
  const dispatch = useAppDispatch();
  const warnings: Warning[] = useAppSelector(selectWarnings);
  const [isLoading, setIsLoading] = useState<boolean | null>(true);
  const warningsLoading = useAppSelector(selectWarningsLoading);

  useEffect(() => {
    getWarningList();
  }, []);

  const getWarningList = async () => {
    await dispatch(fetchWarnings())
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

  if (isLoading === true || warningsLoading === "pending") {
    return <Spinner />;
  }

  return (
    <div className="warning-list">
      <div className="warning-list__title">
        Lịch sử cảnh báo
        <div className="warning-list__sort">
          <SortDescendingOutlined className="warning-list__sort-icon" />
          <p className="warning-list__sort-title">Sort</p>
        </div>
        <div className="warning-list__filter">
          <FilterOutlined className="warning-list__filter-icon" />
          <p className="warning-list__filter-title">Filter</p>
        </div>
      </div>

      <div className="warning-list__table">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="row-checkbox" />
              </th>
              <th>Nội dung</th>
              <th>Khu vực</th>
              <th>Serial</th>
              <th>Mức độ</th>
            </tr>
          </thead>
          <tbody>
            {warnings.map((warning) => (
              <tr key={warning.id}>
                <td>
                  <input type="checkbox" className="row-checkbox" />
                </td>
                <td>{warning.content}</td>
                <td>{warning.camera?.home_id}</td>
                <td>{warning.camera?.serial}</td>
                <td>{warning.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WarningList;
