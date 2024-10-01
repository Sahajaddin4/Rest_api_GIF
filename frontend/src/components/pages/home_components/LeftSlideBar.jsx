import React from 'react'


function LeftSlideBar({toggleOverView}) {
  return (
    <div className=' flex flex-col p-2 gap-5 ml-2 overflow-hidden'>
        <div><button onClick={()=>{toggleOverView()}} className='hover:cursor-pointer hover:text-blue-500' >Api Overview</button></div>
        <div className="version">
            <h1 className='text-xl font-bold'>Version</h1>
            <h5>v 1.0.0</h5></div>

          <div className="create-api-key">
            <button className='bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-300 hover:text-blue-700'>Subscribe to use api</button></div>  
    </div>
  )
}

export default LeftSlideBar