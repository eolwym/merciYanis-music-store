const { getAlbums } = require('../controllers/albums.controller')
const router = require('express').Router()

router.get('/getAlbums', getAlbums)

module.exports = router