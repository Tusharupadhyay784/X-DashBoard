import React, { useEffect, useState } from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import Tilt from 'react-parallax-tilt';



// const user = { islogin: false, loading: true }
const useUser = () => ({ user: auth.currentUser, loading: false })
const Home = () => {
  const navigate = useNavigate();
  const user = useUser();
  useEffect(() => {
    if (user.user === undefined || user.user === null) {
      navigate('/login');
    }
  }, [user.user])

  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title={"Last 6 Months (Revenue)"} height={380} />
        </div>
        <Tilt className="listContainer" scale={.9}>
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </Tilt>
      </div>
    </div>
  )
}




export default Home



