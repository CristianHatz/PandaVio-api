const { Router } = require('express')
const movieController = require('../controllers/movie')

const router = Router()

router.route('/upload').post(movieController.uploadMovie)
router.route('/upload').get(movieController.uploadMovie)

module.exports = router