const config=require("dotenv").config
config()
const { Configuration, OpenAIApi } = require("openai")
const cors = require('cors');
const fs=require("fs")
const express=require("express")
const server=express()
// middlewares
// converts body to json
server.use(express.json())
// enable access to all url

server.use(cors());



fs.readFile("key.txt","utf-8",async(err,keyData)=>{
    server.get("/",(req,res)=>{
      res.send("welcome to the api")
    })
    server.post("/",async(req,res)=>{
        const question =req.body.question
        const scripture=req.body.scripture
        console.log(question,scripture,keyData)

        const openAi = new OpenAIApi(
            new Configuration({
              // apiKey:process.env.OPEN_AI_API_KEY,
              apiKey:keyData
            })
          )
        const response = await openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content:question+ ` according to ${scripture}. also give references`}],
          })
        res.json({answer:response.data.choices[0].message.content})
    })

})
const Port = process.env.PORT || 5000

server.listen(Port,()=>{
  console.log(`server started at ${Port}`)
})

// module.exports = server