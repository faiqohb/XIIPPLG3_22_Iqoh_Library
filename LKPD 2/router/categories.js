const express = require('express')
const router = express.Router()

const categoriesController = require('../controllers/categories')


router.get('/categories', categoriesController.getindex)

router.get('/categories/:id', categoriesController.getByid)

 router.post('/categories', categoriesController.createnew)

router.put('/categories/:id',categoriesController.updateCategory)

 router.delete('/categories/:id', categoriesController.deleteCategory)

  module.exports = router