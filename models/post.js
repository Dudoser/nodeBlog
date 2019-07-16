'use strict';
let models = require('../models/index');
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    image: DataTypes.STRING,
    text: DataTypes.TEXT,
    created_at: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {
    underscored: true,
  });
  post.associate = function(models) {
    // associations can be defined here
    post.hasOne(models.category, {
      foreignKey: 'id',
      as: 'sss'
    })
  };
  return post;
};



