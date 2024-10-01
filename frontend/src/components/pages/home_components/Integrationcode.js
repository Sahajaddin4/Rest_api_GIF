const integration=`
 const axios = require('axios');

const fetchGif = async () => {
  try {
    const response = await axios.get('https://your-api-domain.com/get-gif', {
      headers: {
        'api_key': 'YOUR_API_KEY',
      },
      params: {
        tag: 'funny',  // Optional tag, can be omitted for a random GIF
      },
    });

    if (response.data.success) {
      console.log('GIF URL:', response.data.image);
    } else {
      console.error('Error:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching GIF:', error);
  }
};

fetchGif();

    `

    export default integration;


const response=`
{
  "success": true,
  "message": "GIF fetched successfully",
  "image": "https://media.giphy.com/media/xyz.gif"
}

`

export {response};