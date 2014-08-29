/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produits_encaisses', { 
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
    prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reassorts: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auteur: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    editeur: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edition: {
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
