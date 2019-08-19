'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'category'
  });
  category.associate = function(models) {
    // associations can be defined here
  };
  return category;
};