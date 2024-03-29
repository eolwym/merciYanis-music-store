const express = require('express')
const morgan = require('morgan')
const router = require('./routes/albums.routes')

const app = express();

app.use(morgan('tiny'))

// CORS POLICY
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(router)

// Return error for not corresponding routes
app.get('*', function(req, res){
    res.status(404)
    res.json({error: 'ressource not found'})
});

app.listen(8090)
