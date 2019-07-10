let express = require('express');
let app = express();

let path = require('path');
let http = require('http');
let mysql = require('mysql');


let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "project"
});

app.set('view engine', 'pug');

let router = require('./router/router');

router(app);

app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.listen(3045);
