/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produits', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    code: {
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
    }
  }, {
      freezeTableName: true,
      timestamps: false
  });
};
