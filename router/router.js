'use strict';

module.exports = function (app) {
  let main = require('../controllers/main');
  let post = require('../controllers/post');
  // let category = require('../controllers/category');
  // let auth = require('../controllers/auth');

  // app.route('/post/update/:post_id')
  //     .get(post.update);
  //
  // app.route('/post/create/')
  //     .get(post.create);

  app.route('/post')
      .get(post.index);

  app.route('/post/:post_title')
      .get(post.onePost);
  //
  // app.route('/category/:category_name')
  //     .get(category.index);
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
