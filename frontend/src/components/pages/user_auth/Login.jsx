import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {useDispatch} from 'react-redux';
import {login} from '../../../redux/userAuth/AuthSlice';
function Login() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      let response = await axios.post("/api/user/login", formData);
      console.log(response.data);
      
      // If the request is successful
      if (response.status === 200 || response.status === 201) {
        setFormData({
          email: "",
          password: "",
        });
        
        //handle redux tollkit
        dispatch(login(response.data.user));
        toast.success(response.data.message, {
          autoClose: 500,
          position: "top-center",
        });

        //navigate to home
        navigate("/");
      }
    } catch (error) {
      // Handling error response
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message, {
          autoClose: 500,
          position: "top-center",
        });
      } else {
        toast.error("Something went wrong! at server😔", {
          autoClose: 500,
          position: "top-center",
        });
      }
    }
    
  };

  return (
    <div className="flex justify-center  mt-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg lg:w-2/5">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
