'use strict';

module.exports = function (app) {
  let main = require('../controllers/main');
  let post = require('../controllers/post');
  let category = require('../controllers/category');
  let auth = require('../controllers/auth');

  app.route('/')
      .get(main.index);

  app.route('/post')
      .get(post.index);

  app.route('/post/:url')
      .get(post.view);

  app.route('/post/create/')
      .get(post.create);

  app.route('/category')
      .get(category.index);

  app.route('/category/:category_name')
      .get(category.one_category);

  app.route('/login/')
      .get(auth.login);

  app.route('/login/')
      .post(auth.login);

  app.route('/registration/')
      .get(auth.registration);


};
