'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'category'
  });
  category.associate = function(models) {
    category.hasMany(models.post);
  };
  return category;
};