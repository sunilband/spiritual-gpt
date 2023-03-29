const config = require("dotenv").config;
config();
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
const fs = require("fs");
const express = require("express");
const server = express();
// middlewares
// converts body to json
server.use(express.json());
// enable access to all url

server.use(cors());
const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
    // apiKey:keyData
    // apiKey:"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"
  })
);

server.get("/", (req, res) => {
  res.send("Send a post request in the body(JSON) in the format {question:'question here',scripture:'scripture here'}");
});

server.post("/", async (req, res) => {
  try{
  const question = req.body.question;
  const scripture = req.body.scripture;
  console.log(question, scripture);
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: question + ` according to ${scripture}. also give references.`,
      },
    ],
  });
  res.status(200);
  res.json({ answer: response.data.choices[0].message.content });
}
catch (error) {
  console.error(error)
  res.status(500).send(error || 'Something went wrong');
}
});

const Port = process.env.PORT || 5000;
server.listen(Port, () => {
  console.log(`server started at ${Port}`);
});

module.exports = server;