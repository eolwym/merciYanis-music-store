const { getAlbums } = require('../queries/albums.queries')

exports.getAlbums = (req, res, next) => {
    try {
        const albums = getAlbums()
        res.status(200).json(albums)
    } catch(e) {
        next(e)
    }
}