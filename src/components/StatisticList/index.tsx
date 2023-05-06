import  {SortDescendingOutlined, FilterOutlined } from '@ant-design/icons'

const StatisticList: React.FC = () => {
  return (
    <div className="statistic-list">
        <div className="statistic-list__title">Thống kê
            <div className="statistic-list__sort">
                <SortDescendingOutlined className='statistic-list__sort-icon'/>
                <p className="statistic-list__sort-title">Sort</p>
            </div>
            <div className="statistic-list__filter">
                <FilterOutlined className='statistic-list__filter-icon'/>
                <p className="statistic-list__filter-title">Filter</p>
            </div>
        </div>
        
        <div className="statistic-list__table">
            <table>
                <thead>
                    <tr>
                        <th>
                        <input type="checkbox" className='row-checkbox'/>
                        </th>
                        <th>Profile</th>
                        <th>Khu vực</th>
                        <th>Serial</th>
                        <th data-type="datetime">Thời gian</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" className='row-checkbox'/>
                        </td>
                        <td>Sâm</td>
                        <td>Nhà kho</td>
                        <td>Camera A1</td>
                        <td>21/4/2023 4:49:10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default StatisticList;
