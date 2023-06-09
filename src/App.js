import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./pages/list/List";
import Single from "./pages/singlepage/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import './style/dark.scss'
import { DarkModeContext } from "./context/darkModeContext";
import Signup from "./pages/signup/Signup";
import { Toaster } from "react-hot-toast";

import Logout from "./pages/logout/Logout";
import Edit from "./pages/edit/Edit";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (

    <div className={darkMode ? "app dark" : "app"}>
      <div><Toaster /></div>
      <BrowserRouter>
        <Routes>

          <Route path='/'>
            <Route index element={<Signup />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
            <Route path='edit' element={<Edit />} />
            <Route path='home/*' element={<Home />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
            </Route>

          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
