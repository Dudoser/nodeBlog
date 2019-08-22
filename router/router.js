'use strict';

module.exports = function (app) {
  let main = require('../controllers/main');
  let post = require('../controllers/post');
  let category = require('../controllers/category');
  // let auth = require('../controllers/auth');

  app.route('/post')
      .get(post.index);

  app.route('/category')
      .get(category.index);


  app.route('/post/:url')
      .get(post.onePost);

  app.route('/category/:category_name')
      .get(category.one_category);
  //
  // app.route('/login/')
  //     .all(auth.login);
  //
  // app.route('/registration/')
  //     .get(auth.registration);
  //
  app.route('/')
      .get(main.index);

};
