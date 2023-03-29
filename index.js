import express from 'express'

import UsersController from './src/controllers/users.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (request, result) => {
  const Users = UsersController.getAllUsers()
  result.send(Users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
