'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'user'
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};