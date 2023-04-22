import  {SortDescendingOutlined, FilterOutlined } from '@ant-design/icons'


const CameraList: React.FC = () => {    

    return ( 
    <div className="camera-list">
        <div className="camera-list__title">Camera
            <div className="camera-list__sort">
                <SortDescendingOutlined className='camera-list__sort-icon'/>
                <p className="camera-list__sort-title">Sort</p>
            </div>
            <div className="camera-list__filter">
                <FilterOutlined className='camera-list__filter-icon'/>
                <p className="camera-list__filter-title">Filter</p>
            </div>
        </div>
        
        <div className="camera-list__table">
            <table>
                <thead>
                    <tr>
                        <th>
                        <input type="checkbox" className='row-checkbox'/>
                        </th>
                        <th>Serial</th>
                        <th>Home ID</th>
                        <th>Connection</th>
                        <th>Security Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" className='row-checkbox'/>
                        </td>
                        <td>Camera A1</td>
                        <td>Home 1</td>
                        <td>Connecting</td>
                        <td>High</td>
                    </tr>

                    <tr>
                        <td>
                            <input type="checkbox" className='row-checkbox'/>
                        </td>
                        <td>Camera A2</td>
                        <td>Home 2</td>
                        <td>Disconnected</td>
                        <td>Low</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" className='row-checkbox'/>
                        </td>
                        <td>Camera A3</td>
                        <td>Home 3</td>
                        <td>Connecting</td>
                        <td>Medium</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default CameraList;