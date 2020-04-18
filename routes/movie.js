const { Router } = require('express')
const movieController = require('../controllers/movie')
const fileUpload = require('express-fileupload');

const router = Router()
router.use(fileUpload())
router.route('/upload').post(movieController.uploadMovie)

module.exports = router