const express = require('express')
const app = express()
const port = 3000
app.get('/v1/app', (req, res) => {
  res.send('Hello DevOps :)')
})
app.get('/health', (req, res) => {
  res.status(200).send()
})
app.listen(port, () => {
  console.log(`Devops App listening at http://localhost:${port}`)
})
