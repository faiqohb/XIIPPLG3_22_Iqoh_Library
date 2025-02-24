const express = require('express')
const router = express.Router()

const loansController = require('../controllers/loans')


router.get('/loan', loansController.getindex)

router.get('/loan/:id', loansController.getByid)

 router.post('/loan', loansController.createnew)

router.put('/loan/:id', loansController.updateloans)

 router.delete('/loan/:id', loansController.deleteloans)

  module.exports = router