const express = require('express')
console.log("entered")
const textController = require('../controllers/textCompletion')
const router = express.Router()
router.post('/completion',textController.getAnswer)
router.get('/',textController.home)
router.get('/generate',textController.generateImage)
router.post("/image_generate",textController.callOpenai)
module.exports = router