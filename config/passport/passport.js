var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {


    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    passport.use('registration', new LocalStrategy(

        {
            usernameField: 'email',
            passwordField: 'password',
            function(req, email, password, done) {
                var generateHash = function(password) {

                    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

                };

                User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(user) {

                    if (user)

                    {

                        return done(null, false, {
                            message: 'That email is already taken'
                        });

                    } else

                    {

                        var userPassword = generateHash(password);

                        var data =

                            {
                                email: email,

                                password: userPassword,

                                name: 'user'

                            };


                        User.create(data).then(function(newUser, created) {

                            if (!newUser) {

                                console.log("user created!");
                                return done(null, false);

                            }

                            if (newUser) {

                                return done(null, newUser);

                            }

                        });

                    }

                });
            }

        },

    ));

};