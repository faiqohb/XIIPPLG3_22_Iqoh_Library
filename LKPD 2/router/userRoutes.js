const express = require('express')
const router = express.Router()

const userscontroller = require('../controllers/userController')


router.get('/users', userscontroller.getindex)

router.get('/users/:id', userscontroller.getByid)

 router.post('/users', userscontroller.createnew)

router.put('/users/:id', userscontroller.updateuser )

router.delete('/users/:id', userscontroller.deleteuser )

  module.exports = router