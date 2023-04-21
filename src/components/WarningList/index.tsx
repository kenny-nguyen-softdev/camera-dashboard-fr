import  {SortDescendingOutlined, FilterOutlined, } from '@ant-design/icons'

const WarningList: React.FC = () => {
  return (
    <div className="warning-list">
        <div className="warning-list__title">Lịch sử cảnh báo</div>
        <div className="warning-list__sort">
            <SortDescendingOutlined className='warning-list__sort-icon'/>
            <p className="warning-list__sort-title">Sort</p>
        </div>
        <div className="warning-list__filter">
            <FilterOutlined className='warning-list__filter-icon'/>
            <p className="warning-list__filter-title">Filter</p>
        </div>
        <div className="warning-list__table">
            <table>
                <thead>
                    <tr>
                        <th>
                        <input type="checkbox" className='row-checkbox'/>
                        </th>
                        <th>Nội dung</th>
                        <th>Khu vực</th>
                        <th>Serial</th>
                        <th>Mức độ</th>
                        <th>Playbacks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" className='row-checkbox'/>
                        </td>
                        <td>Cảnh báo người lạ</td>
                        <td>Nhà kho</td>
                        <td>CameraA1</td>
                        <td>High</td>
                        <td>
                            Video
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="checkbox" className='row-checkbox'/>
                        </td>
                        <td>Cảnh báo khu vực</td>
                        <td>Phòng khách</td>
                        <td>CameraA2</td>
                        <td>Low</td>
                        <td>
                            Video
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" className='row-checkbox'/>
                        </td>
                        <td>Cảnh báo người lạ</td>
                        <td>Thư viện</td>
                        <td>CameraA3</td>
                        <td>Medium</td>
                        <td>
                            Video
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default WarningList;
