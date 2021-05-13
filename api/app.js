const express = require('express')
const morgan = require('morgan')
const router = require('./routes/albums.routes')

const app = express();

exports.app = app

app.use(morgan('tiny'))
app.use(express.json())

// CORS POLICY
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(router)

app.listen(8090)
