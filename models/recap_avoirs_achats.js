/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recap_avoirs_achats', { 
    no_avoir: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heure: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_transac: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    montant: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_fichier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cd: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
      freezeTableName: true
  });
};
