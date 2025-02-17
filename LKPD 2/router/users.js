const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/user')


router.get('/users', usercontroller.getindex)

router.get('/users/:id', usercontroller.getByid)

 router.post('/users', usercontroller.createnew)

router.put('/user/:id',usercontroller.updateUser )

 router.delete('/user/:id', usercontroller.deleteUser )

  module.exports = router