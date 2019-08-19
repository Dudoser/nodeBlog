'use strict';
let passwordHash = require('password-hash');
let hashedPassword = passwordHash.generate('admin');
let dimaPass = passwordHash.generate('dima');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('user', [
          {
              name: 'vlad',
              password: hashedPassword,
              image: 'default.png',
              description: 'here description about Vlad',
              created_at: '2016-06-21 16:00:00.000000',
              updated_at: '2016-06-21 16:00:00.000000',
          },
          {
              name: 'dima',
              password: dimaPass,
              image: 'default.png',
              description: 'here description about Dima',
              created_at: '2016-06-21 16:00:00.000000',
              updated_at: '2016-06-21 16:00:00.000000',
          },
          {
              name: 'masha',
              password: hashedPassword,
              image: 'default.png',
              description: 'here description about Masha',
              created_at: '2016-06-21 16:00:00.000000',
              updated_at: '2016-06-21 16:00:00.000000',
          },
          {
              name: 'artem',
              password: hashedPassword,
              image: 'default.png',
              description: 'here description about Artem',
              created_at: '2016-06-21 16:00:00.000000',
              updated_at: '2016-06-21 16:00:00.000000',
          },
          {
              name: 'tolya',
              password: hashedPassword,
              image: 'default.png',
              description: 'here description about Tolik',
              created_at: '2016-06-21 16:00:00.000000',
              updated_at: '2016-06-21 16:00:00.000000',
          }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('user', null, {});
  }
};
