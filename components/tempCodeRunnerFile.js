const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  })
)