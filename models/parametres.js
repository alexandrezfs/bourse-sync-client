/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parametres', { 
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valeur: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
      freezeTableName: true
  });
};
