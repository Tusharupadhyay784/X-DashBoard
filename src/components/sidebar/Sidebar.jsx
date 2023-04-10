import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CloudCircleOutlinedIcon from '@mui/icons-material/CloudCircleOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to={'/home'} style={{ textDecoration: "none" }} >
                    <span className='logo' >Xadmin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li onClick={() => navigate('/home')}>
                        <DashboardIcon className="icon" />
                        <span>DashBoard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to={'/users'} style={{ textDecoration: "none" }}>

                        <li>
                            <PersonOutlineOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to={'/products'} style={{ textDecoration: "none" }}>
                        <li>
                            <Inventory2OutlinedIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <ViewListOutlinedIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USERFUL</p>

                    <li>
                        <ViewListOutlinedIcon className="icon" />
                        <span>Stats</span>
                    </li>

                    <li>
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <CloudCircleOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>

                    <li>
                        <QueryStatsOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>

                    <li>
                        <SettingsOutlinedIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AcUnitOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <Link to={'/logout'} style={{ textDecoration: 'none' }}>
                        <li>
                            <LogoutOutlinedIcon className="icon" />
                            <span>Logout</span>
                        </li>
                    </Link>
                </ul>
            </div>
            {/* <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
                
            </div> */}
        </div>
    )
}

export default Sidebar