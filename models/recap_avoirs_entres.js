/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recap_avoirs_entres', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    no_transaction: {
      type: DataTypes.STRING,
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
    no_fichier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    magasin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    montant: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    magasin_hote: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uniquement_cd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bon_cadeau: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
      freezeTableName: true
  });
};
