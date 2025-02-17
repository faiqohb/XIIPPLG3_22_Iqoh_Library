const express = require('express');
const app = express()
const userrouter = require('./router/users')
const categoryrouter = require('./router/categories')



const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // fungsinya untuk aplikasi kita dapat membaca inputan dari home

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(userrouter)
app.use(categoryrouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})