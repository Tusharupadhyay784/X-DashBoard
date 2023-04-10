import React from 'react'
import './feature.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'// use this in your portfolio
import 'react-circular-progressbar/dist/styles.css' // use this in your portfolio
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import Tilt from 'react-parallax-tilt';
const Featured = () => {
    return (
        
            <Tilt className='featured parallax-effect' scale={.9}>
                <div className="top parallax-effect">
                    <h1 className='title inner-element'>Total Revenue</h1>
                    <MoreVertIcon fontSize="small" />
                </div>
                <div className="bottom">
                    <div className="featuredChart">
                        <CircularProgressbar value={70} text='70%' strokeWidth={5} />
                    </div>
                    <p className="title">Total Sales Made Today</p>
                    <p className="amount">$420</p>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit illum aspernatur fugiat dignissimos dolor recusandae.</p>
                    <div className="summary">
                        <div className="item">
                            <div className="itemTitle">Target</div>
                            <div className="itemResult negative">
                                <KeyboardArrowDownIcon fontSize="small" />
                                <div className="resultAmount">$12.2k</div>
                                {/* <KeyboardArrowUpOutlinedIcon fontSize='small'/> */}
                            </div>
                        </div>
                        <div className="item">
                            <div className="itemTitle">Last Week</div>
                            <div className="itemResult positive">
                                <KeyboardArrowUpOutlinedIcon fontSize="small" />
                                <div className="resultAmount ">$12.2k</div>
                                {/* <KeyboardArrowUpOutlinedIcon fontSize='small'/> */}
                            </div>
                        </div>
                        <div className="item">
                            <div className="itemTitle">Last Month</div>
                            <div className="itemResult positive">
                                <KeyboardArrowUpOutlinedIcon fontSize="small" />
                                <div className="resultAmount">$12.2k</div>
                                {/* <KeyboardArrowUpOutlinedIcon fontSize='small'/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Tilt>
        // </Tilt>
    )
}

export default Featured