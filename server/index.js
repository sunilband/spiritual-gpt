require('dotenv').config()
const nodefetch = require('node-fetch')
const API_URL = 'https://api.openai.com/v1/chat/completions'
const API_KEY = process.env.OPEN_AI_API_KEY
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
// const server = express();
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

// enable access to all url
app.use(cors())

// middlewares

// converts body to json
app.use(express.json())
//logger
app.use(morgan('combined'))

io.on('connection', (socket) => {
  // check user connection
  console.log('user connected: ' + socket.id)

  socket.on('question', (data) => {
    let ans = ''
    const question = data.question
    const scripture = data.scripture
    const language = data.language
    const user = data.user

    console.log(question, scripture, language)

    try {
      // Fetch the response from the OpenAI API
      const response = nodefetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content:
                question +
                ` according to ${scripture}. also give references.answer only in in ${language}`,
              // "what is love " + ` according to hindusim. also give references.answer only in in english`,
            },
          ],
          stream: true, // For streaming responses
        }),
      })
        .then((response) => response.body)
        .then((resp) =>
          resp.on('readable', () => {
            let chunk

            while (null !== (chunk = resp.read())) {
              try {
                const lines = chunk.toString().split('\n')

                if (lines.includes('data: [DONE]')) {
                  socket.emit('end', {
                    answer: ans,
                    question,
                    scripture,
                    language,
                    user,
                  })
                }

                const parsedLines = lines
                  .map((line) => line.replace(/^data: /, '').trim()) // Remove the "data: " prefix
                  .filter((line) => line !== '' && line !== '[DONE]') // Remove empty lines and "[DONE]"
                  .map((line) => JSON.parse(line)) // Parse the JSON string

                for (const parsedLine of parsedLines) {
                  const { choices } = parsedLine
                  const { delta } = choices[0]
                  const { content } = delta
                  // Update the answer with the new content
                  if (content) {
                    ans += content
                    socket.emit('answer', ans)
                  }
                }

                // console.log(ans)
              } catch (error) {
                console.log(error)
              }
            }
          }),
        )
    } catch (error) {
      console.error('Error:', error)
    }
  })
})

app.get('/', (req, res) => {
  res.send('visit spiritualgpt.vercel.app')
})

const Port = process.env.PORT || 5000
server.listen(Port, () => {
  console.log(`server started at ${Port}`)
})

module.exports = server
