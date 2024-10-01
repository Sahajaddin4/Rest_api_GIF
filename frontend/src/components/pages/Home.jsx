import React, { useState } from 'react'
import LeftSlideBar from './home_components/LeftSlideBar'
import RightSlideBar from './home_components/RightSlideBar'
import './Home.css';
function Home() {
  const[overView,setOverView]=useState(false);
  
  const toggleOverView=()=>{
    setOverView(!overView);
  }
  return (
    <div className=' flex gap-1 '>
        <div className="leftSlidebar  border   w-[300px]"><LeftSlideBar toggleOverView={toggleOverView} /></div>
        <div className="right-api-desc  border w-full  "><RightSlideBar overView={overView}/></div>
    </div>
  )
}

export default Home;