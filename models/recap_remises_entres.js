/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recap_remises_entres', { 
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
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    remise_en: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    montant: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    donc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    magasin: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
      freezeTableName: true,
      timestamps: false
  });
};
