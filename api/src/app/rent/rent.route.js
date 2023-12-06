const { houseRent } = require('./rent.controller')

const router = require('express').Router()

router.post('/rent', houseRent)


module.exports = router
