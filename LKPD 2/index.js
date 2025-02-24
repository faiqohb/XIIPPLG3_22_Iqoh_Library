const express = require('express');
const app = express()
const bookrouter = require('./router/book')
const categoryrouter = require('./router/categories')
const userRoutesrouter = require('./router/userRoutes')

const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // fungsinya untuk aplikasi kita dapat membaca inputan dari home

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(bookrouter)
app.use(categoryrouter)
app.use(userRoutesrouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})