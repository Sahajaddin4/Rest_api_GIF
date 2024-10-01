import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Password mismatch validation
  if (formData.password !== formData.confirmPassword) {
    toast.error('Password mismatched!😔', {
      autoClose: 500,
      position: 'top-center',
    });
    setFormData({
      name: '',
    email: '',
    password: '',
    confirmPassword: '',
    });
    return;
  }

  try {
    // Making an API request
    const response = await axios.post('/api/user/signup', formData);
    

    // If the request is successful
    if (response.status === 200 || response.status === 201) {
      setFormData({
        name: '',
      email: '',
      password: '',
      confirmPassword: '',
      });
      toast.success(response.data.message, {
        autoClose: 500,
        position: 'top-center',
      });

      //navigate to login
      navigate('/login');

    }
  } catch (error) {
    // Handling error response
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message, {
        autoClose: 500,
        position: 'top-center',
      });
    } else {
      toast.error('Something went wrong! at server😔', {
        autoClose: 500,
        position: 'top-center',
      });
    }
  }
  };

  return (
    <div className="flex justify-center mt-10  ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg lg:w-2/5">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
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
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
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
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
