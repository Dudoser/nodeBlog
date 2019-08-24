let express = require('express');
let app = express();

let path = require('path');
let http = require('http');
var bodyParser = require('body-parser');

app.use(express.json());
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, 'views'));

let router = require('./router/router');

router(app);


app.listen(8647);
