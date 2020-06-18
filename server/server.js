let express = require('express');
let app = express();
let port = process.env.PORT || 3100;


let routes = require('../src/api/features/module/music/routes') //importing route

routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port);

console.log('REST FULL API server started on: ' + port);