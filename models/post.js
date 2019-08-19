'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    url: DataTypes.STRING,
    image: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    underscored: true,
    tableName: 'post'
  });
  post.associate = function(models) {
    // associations can be defined here
  };
  return post;
};