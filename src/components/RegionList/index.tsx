import  {SortDescendingOutlined, FilterOutlined } from '@ant-design/icons'
const RegionList: React.FC = () => {
  return (
    <div className="region-list">
        <div className="region-list__title">Home
            <div className="region-list__sort">
                <SortDescendingOutlined className='region-list__sort-icon'/>
                <p className="region-list__sort-title">Sort</p>
            </div>
            <div className="region-list__filter">
                <FilterOutlined className='region-list__filter-icon'/>
                <p className="region-list__filter-title">Filter</p>
            </div>
        </div>
        
        <div className="region-list__table">
            <table>
                <thead>
                    <tr>
                        <th>
                        <input type="checkbox" className='row-checkbox'/>
                        </th>
                        <th>ID</th>
                        <th>Serial</th>
                        <th>Profile</th>
                        <th>Activate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" className='row-checkbox'/>
                        </td>
                        <td>1</td>
                        <td>CameraA1</td>
                        <td>Sâm</td>
                        <td>Enable</td>
                    </tr>

                    <tr>
                        <td>
                            <input type="checkbox" className='row-checkbox'/>
                        </td>
                        <td>2</td>
                        <td>CameraA2</td>
                        <td>Long</td>
                        <td>Disable</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" className='row-checkbox'/>
                        </td>
                        <td>3</td>
                        <td>CameraA3</td>
                        <td>Kiên</td>
                        <td>Disable</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default RegionList;
