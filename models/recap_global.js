/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recap_global', { 
    id_incrementjava: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chiffre_journee: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_avoir: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_avoir_util: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_echange: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_echange_util: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_avoir_echange_converti: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_remise: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_echange_direct: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_esp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_esp_reel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_cb: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_cheque: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_esp_emis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_esp_reel_emis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_avoir_emis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_esp_emis_achat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_avoir_emis_achat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_achat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_vente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_produits: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_livre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_manga: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_cd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_vinyle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_dvd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_bluray: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_jeu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_console: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_autre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_rea: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_norea: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_produits: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_achats: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_achats_esp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_achats_avoir: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_avoirs_entres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_avoirs_rendus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_echanges_directs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_remises: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_transac: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_livres_achetes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_mangas_achetes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_cd_achetes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_vinyles_achetes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_dvd_achetes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_bluray_achetes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_jeux_achetes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_consoles_achetes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_autres_achetes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_livre_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_manga_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_cd_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_vinyle_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_dvd_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_bluray_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_jeu_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_console_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_autre_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_norea_livre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_norea_manga: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_norea_cd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_norea_vinyle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_norea_dvd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_norea_bluray: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_norea_jeu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_norea_console: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_norea_autre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_rea_livre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_rea_manga: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_rea_cd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_rea_vinyle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_rea_dvd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_rea_bluray: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_rea_jeu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_rea_console: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nb_rea_autre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    norea_livre_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    norea_manga_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    norea_cd_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    norea_vinyle_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    norea_dvd_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    norea_bluray_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    norea_jeu_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    norea_console_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    norea_autre_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rea_livre_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rea_manga_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rea_cd_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rea_vinyle_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rea_dvd_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rea_bluray_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rea_jeu_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rea_console_prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rea_autre_prix: {
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
  }).removeAttribute('id');
};
