let express = require('express');
let cors = require('cors')
let app = express();
let port = process.env.PORT || 8000;
let bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./routes');
routes(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);