const axios = require('axios');
const Api_Key = require('../models/ApiKey_model');

const GetGif = async (req, res) => {
  try {
    const API_KEY = req.headers['api_key'];  // Get API key from headers
    const tag = req.query.tag;

    // Validate API key presence
    if (!API_KEY) {
      return res.status(401).json({
        success: false,
        message: 'No API key provided. Please subscribe to get your API key.',
      });
    }

    // Verify API key
    const isCorrect = await Api_Key.findOne({
      user: req.user,
      key: API_KEY,
    });

    if (!isCorrect) {
      return res.status(403).json({
        success: false,
        message: 'Invalid API key. Please provide a valid API key.',
      });
    }

    // Construct the GIF API URL
    const url = tag
      ? `${process.env.API_URL}${process.env.API_KEY}&tag=${tag}`
      : `${process.env.API_URL}${process.env.API_KEY}`;

    // Fetch GIF from the external API
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 5000,  // Request timeout
    });

    // Handle no response case
    if (!response || !response.data || !response.data.data) {
      return res.status(504).json({
        success: false,
        message: 'GIF API request timed out or returned no data.',
      });
    }

    // Extract the GIF URL
    const imageUrl = response.data.data.images.downsized.url;

    // Return the GIF URL
    return res.status(200).json({
      success: true,
      message: 'GIF fetched successfully',
      image: imageUrl,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error occurred while fetching the GIF.',
      error: error.message,
    });
  }
};

module.exports = GetGif;
