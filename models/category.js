'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    underscored: true,
  });
  category.associate = function(models) {
    // associations can be defined here
  };
  return category;
};