import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'

import Tilt from 'react-parallax-tilt'

const Widget = ({ type }) => {
    let data;
    // temporary
    const amount = 100;
    const diff = 20;
    switch (type) {
        case 'user':
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlinedIcon className='icon' style={{ color: "crimson", backgroundColor: "rgba(255,0,0,.2)" }} />
            };
            break;
        case 'order':
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className='icon' style={{ color: "goldenrod", backgroundColor: "rgba(218,165,32,.2)" }} />
            };
            break;
        case 'earning':
            data = {
                title: "EARNING",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className='icon' style={{ color: "green", backgroundColor: "rgba(0,128,0,.2)" }} />
            };
            break;
        case 'balance':
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See Details",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{ color: "purple", backgroundColor: "rgba(128,0,128,.2)" }} />
            };
            break;
        default:
            break;
    }


    return (
        <Tilt className='widget'>
            <div className="left ">
                <div className="title">{data.title}</div>
                <div className="counter">{data.isMoney && "$"}{amount}</div>
                <div className="link">{data.link}</div>
            </div>
            <div className="right ">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </Tilt>
    )
}

export default Widget