const express = require("express");
const dotenv = require("dotenv").config();
const { OpenAIApi, Configuration } = require("openai");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
const routes = require('./routes/textCompletion');
app.set("view engine", "ejs");
app.set("views", "views");
app.use(routes)

app.listen(3000);
