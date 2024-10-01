import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth, logOut } from "../../redux/userAuth/AuthSlice";
import { Link, NavLink } from "react-router-dom";
import DropDown from "./dropdown_menu/DropDown";
function Navbar() {
  const { isAuthenticated} = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  

  
  const checkUserAuth = async () => {
    let response = await axios.get("/api/user/check-auth");

    dispatch(
      checkAuth({
        isAuthenticated: response.data.isAuthenticated,
        user: response.data.user,
      })
    );

    
  };
  useEffect(() => {
    checkUserAuth();
  },[isAuthenticated]);
  return (
    <nav className="bg-[#FBB6CE] flex justify-between items-center gap-5 px-5 py-3 h-[10vh] mt-2 lg:w-full md:w-[90vmax] sm:w-[80vmin] rounded mb-5">
      <div className="logo text-3xl font-bold ">
        <Link to="#" />
        REST API
      </div>
      <div className="nav-items">
        <ul className="flex justify-between items-center gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
        
          {isAuthenticated ? (
            <>
              <DropDown />
            </>
          ) : (
            <>
              <li>
                <NavLink to="/signup">SignUp</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
