const { getAlbums } = require('../controllers/albums.controller')
const router = require('express').Router()

router.get('/albums', getAlbums)

module.exports = router