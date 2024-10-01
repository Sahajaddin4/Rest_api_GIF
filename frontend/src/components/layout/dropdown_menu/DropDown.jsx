import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/userAuth/AuthSlice';
import { UserCircle } from '@phosphor-icons/react';
import axios from 'axios';

function DropDown() {
  const { user } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = async () => {
    await axios.delete("/api/user/logout");
    dispatch(logOut());
  };

  const toggleDropDown = (e) => {
    e.stopPropagation(); // Stop the event from propagating to the window click listener
    setIsOpen(!isOpen);
  };
useEffect(()=>{
    
    const handleClick=()=>{
    
        
        
        if(isOpen===true)
        {
            setIsOpen(false);
        }
    }

    window.addEventListener('click',handleClick);

    return ()=>{
        window.removeEventListener('click',handleClick);
    }
    
},[toggleDropDown])
  return (
    <div className="relative inline-block">
      {/* Dropdown button */}
      <button onClick={toggleDropDown} className="flex items-center space-x-2">
      <UserCircle size={32} className="text-gray-600 hover:text-blue-600 transition duration-200" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 transition-opacity duration-300 ease-in-out">
          <li className="px-4 py-2 text-gray-800 hover:bg-blue-50 transition duration-200">
            <p className="font-medium">{user}</p>
          </li>
          <hr className="my-1 border-gray-200" />
          <li onClick={handleLogOut} className="px-4 py-2 text-red-600 cursor-pointer hover:bg-red-50 transition duration-200">
            <button>Logout</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropDown;
