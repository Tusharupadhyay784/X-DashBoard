import React, { useContext, useState } from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import LightModeIcon from '@mui/icons-material/LightMode';
import { DarkModeContext } from "../../context/darkModeContext";
import { auth } from '../../firebase'

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext)
  // console.log(auth.currentUser.photoURL)
  const img = auth?.currentUser?.photoURL

  const [toggle, setToggle] = useState([false, dispatch({ type: "none" })]);

  const goFullScreenFunc = () => {
    document.documentElement.requestFullscreen();

  }
  return (
    <div className='navbar'>
      <div className={`wrapper`}>
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div className="item" style={{ cursor: "pointer" }}>
            {(toggle[0]) !== false ? (<LightModeIcon onClick={() => setToggle([false, dispatch({ type: "TOGGLE" })])} className='icon' />) : (<DarkModeOutlinedIcon onClick={() => setToggle([true, dispatch({ type: "TOGGLE" })])} className='icon' />)}

          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon' onClick={goFullScreenFunc} style={{ cursor: 'pointer' }} />

          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">1</div>

          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="counter">1</div>

          </div>
          <div className="item">
            <ListOutlinedIcon className='icon' />

          </div>
          <div className="item">
            {/* https://images.pexels.com/photos/4816805/pexels-photo-4816805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */}
            {/* <img src={"https://images.pexels.com/photos/4816805/pexels-photo-4816805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" className='avatar' /> */}
            <img src={!img ? "https://images.pexels.com/photos/4816805/pexels-photo-4816805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : img} alt="" className='avatar' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar







