let express = require('express');
let app = express();

let url = require('url');



module.exports.login = function (req, res) {

    if (req.method == 'GET') {
        res.render('auth/login');
    }

    if(req.method == 'POST') {


        let username = req.body.username;
        let password = req.body.password;





        res.render('auth/login');
    }

};

module.exports.registration = function (req, res) {

    res.render('auth/registration');

};
