const { Router } = require('express')

const router = Router()

router.use('/api/movie', require('./movie'))

module.exports = router