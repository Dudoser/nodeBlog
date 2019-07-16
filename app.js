let express = require('express');
let app = express();

let path = require('path');
let http = require('http');

app.set('view engine', 'pug');

let router = require('./router/router');

router(app);

app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.listen(8677);
