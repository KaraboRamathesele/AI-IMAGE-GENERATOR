// Here we will begin using the OpenAI library

const res = require("express/lib/response");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//OpenAI library will give a promise
const generateImage = async (request, response) => {
  try {
    const response = await openai.createImage({
      prompt: "Fairy with long hair",
      n: 1, //number of images
      size: "512x512",
    });

    const imageUrl = response.data.data[0].url;

    response.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    response.status(400).json({
      success: false,
      error: "Image could not be generated",
    });
  }
};

module.exports = { generateImage };
