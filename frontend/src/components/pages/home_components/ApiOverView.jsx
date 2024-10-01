import React from 'react'

function ApiOverView() {
  return (
    <div> {/* API Overview */}
    <div className="flex flex-col gap-10 ml-5 border-r-2 p-y-3 px-1 mb-2 overflow-y-auto h-[90vh]">
      <div className="api-overview flex flex-col gap-3">
        <h1 className='text-2xl font-bold'>API Overview</h1>
        <div>
          <h2 className='text-lg font-semibold'>GIF Generator API</h2>
          <p>
            A RESTful web service designed to provide developers with randomly
            generated GIFs based on user-defined tags. This API allows you to
            easily integrate GIF functionality into your applications, enabling
            users to access a wide variety of GIFs tailored to their
            preferences.
          </p>
        </div>
      </div>
      <div className="features">
        <h2 className='text-lg font-semibold'>Features:</h2>
        <ul className="list-disc">
          <li>
            <h2 className='text-lg font-semibold'>Random GIF Generation:</h2> Retrieve random GIFs without any
            specific tags.
          </li>
          <li>
            <h2 className='text-lg font-semibold'>Tag-Based Search:</h2> Specify a tag to receive GIFs related to
            that particular theme or category.
          </li>
          <li>
            <h2 className='text-lg font-semibold'>High-Quality Content:</h2> Access a vast library of high-quality
            GIFs to enhance user engagement and experience.
          </li>
        </ul>
      </div>

      <div className="data-provided">
        <h1 className='text-2xl font-bold'>Data Provided:</h1>
        <ul className="list-disc">
          <li>
            <h2 className='text-lg font-semibold'>GIF URL:</h2> Direct link to the generated GIF.
          </li>
          <li>
            <h2 className='text-lg font-semibold'>Tags:</h2> List of tags associated with the GIF.
          </li>
          <li>
            <h2 className='text-lg font-semibold'>Metadata:</h2> Information about the GIF such as title, type,
              and dimensions.
          </li>
        </ul>
      </div>

      <div className="api-details">
        <h1 className='text-2xl font-bold'>GIF Generator API</h1>
        <p>
          Looking for an API to enrich your applications with dynamic GIFs?
          Check out our GIF Generator API, designed to serve developers by
          providing easy access to random GIFs based on specified tags. The API
          responds with results in JSON format for seamless integration.
        </p>
      </div>

      <div className="api-endpoints ">
        <h1 className='text-2xl font-bold'>API Endpoints:</h1>
        <ul className="list-disc">
          <li>
            <h2 className='text-lg font-semibold'>GET</h2> /get-gif: Retrieve a random GIF.
          </li>
          <li>
            <h2 className='text-lg font-semibold'>GET</h2> /get-gif: Retrieve a tag-based random GIF.
          </li>
        </ul>
      </div>
      <div className='h-10'></div>
    </div></div>
  )
}

export default ApiOverView