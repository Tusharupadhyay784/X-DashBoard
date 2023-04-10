import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import Tablex from '../../components/table/Table'
import Tilt from 'react-parallax-tilt'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
const Single = () => {
  const img = auth?.currentUser?.photoURL;
  const displayName = auth?.currentUser?.displayName;
  const email = auth?.currentUser?.email;
  console.log(auth);
  const navigate = useNavigate();
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <Tilt className="left parallax-effect">
            <div className="editButton" onClick={()=>navigate('/edit')} >Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <Tilt className="parallax-effect-img"
                tiltMaxAngleX={40}
                tiltMaxAngleY={40}
                perspective={800}
                transitionSpeed={1500}
                scale={1.1}
                gyroscope={true}>
                <img src={img ? img : "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" className="itemImg inner-element" />
              </Tilt>
              <div className="details">
                <h1 className='itemTitle'>{displayName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemKey">{email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemKey">+91 987548321</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemKey">Rohini</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemKey">INDIA</span>
                </div>
              </div>
            </div>
          </Tilt>
          <div className="right">
            <Chart height={220} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <Tilt className="bottom" scale={.89}>
          <h1 className='title'>Last Transaction</h1>
          <Tablex />
        </Tilt>
      </div>
    </div>
  )
}

export default Single