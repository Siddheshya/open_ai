const { OpenAIApi, Configuration } = require("openai");
const dotenv = require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);
exports.getAnswer = (req, res, next) => {
  console.log("Entered");
  const text = req.body.Query;
  const resposne = openai
    .createCompletion({
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 500,
      temperature: 1,
    })
    .then((response) => {
      return res.render("home", {
        pageTitle: "home",
        path: "home",
        show: true,
        data: response.data.choices[0].text,
      });
      console.log(response.data.choices[0].text);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.home = (req, res, next) => {
  res.render("home", {
    pageTitle: "home",
    path: "generator",
    show: false,
  });
};
exports.callOpenai = (req, res, next) => {
  const text = req.body.Query
  const response = openai
    .createImage({
      prompt: text,
      n: 1,
      size: "256x256",
    })
    .then((response) => {
      console.log(response.data.data[0].url);
      return res.render("image_generate", {
        pageTitle: "Image Generator",
        path: "/",
        show: true,
        url:response.data.data[0].url
      });
      
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.generateImage = (req, res, next) => {
  return res.render("image_generate", {
    pageTitle: "Image Generator",
    path: "/",
    show: false,
  });
};
