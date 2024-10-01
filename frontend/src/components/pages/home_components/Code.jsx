import React from 'react'
import integration, { response } from './Integrationcode'

function Code() {
  const newIntegration=integration.split(/[,;]+/);
  const newResponse=response.split(',');
  return (
   <div className='flex ga-10 p-2'>
    {/* Code for integrating */}
    <div className="integration overflow-y-auto w-[70%] h-[90vh] p-4 border-l-2">
        <h1 className="text-xl font-bold">
          How to Integrate the API into Your Application:
        </h1>
        <ol className="list-decimal">
          <li>
            <h2>Sign Up: </h2>Create an account on our platform to access the
            API.
          </li>
          <li>
            <h2>Obtain an API Key:</h2> Upon registration, you'll receive an API
            key that will be used to authenticate your requests.
          </li>
          <li>
            <h2>Choose Your Endpoint:</h2> Select the appropriate endpoint based
            on your needs (random GIF or tag-specific GIF).
          </li>
          <li>
            <h2>Make a Request:</h2> Use Javascript and express framework .Right part  is an example in JavaScript using
            axios:
          </li>
        </ol>
        <div className="code  mt-10">
         
        </div>
      </div>
    {/* Codes */}
    <div className="codes bg-gray-800 w-full flex flex-col gap-10 text-white overflow-y-auto h-[80vh]">
         <div className="heading bg-black shadow-lg py-3 px-2">
          <h1 className='text-slate-200'>JavaScript</h1>
         </div>
         <div className=' p-2'>
          <h1 className='text-blue-600 text-3xl mb-5'>Integration Method:</h1>
            {newIntegration.map((line,index)=>{return <p key={index} className='text-white p-2'>{line}</p>})}
          </div>
          <div className="response p-2 border-t-2">
            <h1 className='text-3xl text-green-600 mb-5'>Response:</h1>
              {newResponse.map((line,index)=>{return <p key={index} className='text-white p-2'>{line}</p>})}
          </div>
    </div>
   </div>
  )
}

export default Code