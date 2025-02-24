const express = require('express')
const router = express.Router()

const Bookcontroller = require('../controllers/book')


router.get('/Books', Bookcontroller.getindex)

router.get('/Books/:id', Bookcontroller.getByid)

 router.post('/Books', Bookcontroller.createnew)

router.put('/Book/:id',Bookcontroller.updateBook )

 router.delete('/Book/:id', Bookcontroller.deleteBook )

  module.exports = router