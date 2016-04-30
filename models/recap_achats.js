/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recap_achats', { 
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
    montant: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    magasin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nofichier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paiement_en: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    livre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manga: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vinyle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dvd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bluray: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jeu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    console: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    autre: {
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
    }
  }, {
      freezeTableName: true,
      timestamps: false
  });
};
