/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transactions', { 
    no_transaction: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    heure: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bon_cadeau: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avoir: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avoir_util: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    echange: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    echange_util: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avoir_echange_converti: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    remise: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    echange_direct: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cb: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cheque: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    esp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    esp_reel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avoir_emis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    esp_emis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    esp_reel_emis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_ventes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_achats: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_produits: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    magasin: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
      freezeTableName: true
  });
};
