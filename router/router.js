'use strict';

module.exports = function (app) {
  let main = require('../controllers/main');
  let post = require('../controllers/post');
  let category = require('../controllers/category');

  app.route('/post/*')
      .get(post.index);

  app.route('/category/*')
      .get(category.index);

  app.route('/')
      .get(main.index);

};