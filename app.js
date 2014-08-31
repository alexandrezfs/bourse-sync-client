var request = require('request');
var bodyParser = require('body-parser');
var config = require('./config');

var express = require('express')
    , routes  = require('./routes')
    , http    = require('http')
    , path    = require('path')
    , db      = require('./models')

var app = express()

// all environments
app.set('port', process.env.PORT || config.values.port)
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(express.bodyParser({limit: 1024000000}));
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler())
}

var getCurrentDate = function() {

// GET CURRENT DATE
    var date = new Date();

// GET YYYY, MM AND DD FROM THE DATE OBJECT
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString();
    var dd  = date.getDate().toString();

// CONVERT mm AND dd INTO chars
    var mmChars = mm.split('');
    var ddChars = dd.split('');

// CONCAT THE STRINGS IN YYYY-MM-DD FORMAT
    var datestring = (ddChars[1]?dd:"0"+ddChars[0]) + '/' + (mmChars[1]?mm:"0"+mmChars[0]) + '/' + yyyy;

    return datestring;

}

var buildDataJson = function(callback, data, dataToUpdate) {

    db.transactions.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(transactions) {

        data.transactions = JSON.stringify(transactions);
        dataToUpdate.transactions = transactions;

        db.produits_encaisses.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(produits_encaisses) {

            data.produits_encaisses = JSON.stringify(produits_encaisses);
            dataToUpdate.produits_encaisses = produits_encaisses;

            db.recap_achats.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_achats) {

                data.recap_achats = JSON.stringify(recap_achats);
                dataToUpdate.recap_achats = recap_achats;

                db.recap_argent_entre_dans_caisse.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_argent_entre_dans_caisse) {

                    data.recap_argent_entre_dans_caisse = JSON.stringify(recap_argent_entre_dans_caisse);
                    dataToUpdate.recap_argent_entre_dans_caisse = recap_argent_entre_dans_caisse;

                    db.recap_argent_pris_de_caisse.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_argent_pris_de_caisse) {

                        data.recap_argent_pris_de_caisse = JSON.stringify(recap_argent_pris_de_caisse);
                        dataToUpdate.recap_argent_pris_de_caisse = recap_argent_pris_de_caisse;

                        db.recap_avoirs_achats.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_avoirs_achats) {

                            data.recap_avoirs_achats = JSON.stringify(recap_avoirs_achats);
                            dataToUpdate.recap_avoirs_achats = recap_avoirs_achats;

                            db.recap_avoirs_entres.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_avoirs_entres) {

                                data.recap_avoirs_entres = JSON.stringify(recap_avoirs_entres);
                                dataToUpdate.recap_avoirs_entres = recap_avoirs_entres;

                                db.recap_avoirs_rendus.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_avoirs_rendus) {

                                    data.recap_avoirs_rendus = JSON.stringify(recap_avoirs_rendus);
                                    dataToUpdate.recap_avoirs_rendus = recap_avoirs_rendus;

                                    db.recap_echanges_directs_entres.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_echanges_directs_entres) {

                                        data.recap_echanges_directs_entres = JSON.stringify(recap_echanges_directs_entres);
                                        dataToUpdate.recap_echanges_directs_entres = recap_echanges_directs_entres;

                                        db.recap_remises_entres.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_remises_entres) {

                                            data.recap_remises_entres = JSON.stringify(recap_remises_entres);
                                            dataToUpdate.recap_remises_entres = recap_remises_entres;

                                            db.produits.findAll({limit : 100, order : "id DESC"}).success(function(produits) {

                                                data.produits = JSON.stringify(produits);

                                                db.parametres.find({where: { description : 'localisation' }}).success(function(localisation) {

                                                    data.localisation = JSON.stringify(localisation);

                                                    db.recap_global.find({where: { magasin : localisation.valeur, date : getCurrentDate() }}).success(function(recap_global) {

                                                        data.recap_global = JSON.stringify(recap_global);

                                                        callback(data, dataToUpdate);

                                                    });

                                                });

                                            });
                                        });
                                    });

                                });

                            });

                        });

                    });

                });

            });
        });

    });

}

var sync = function() {

    buildDataJson(function(data, dataToUpdate) {

        request({
            uri: config.values.apiURL + "/pushEverything",
            method: "POST",
            form: data
        }, function(error, response, body) {

            if(response != null && response.statusCode == 200) {

                console.log("GOT REPLY 200");

                console.log(body);

                var reply = JSON.parse(body);

                if(reply.response == "success") {

                    console.log("SUCCESS OK. NOW UPDATING HOUR");

                    for(var key in dataToUpdate) {

                        var entitiesToUpdate = dataToUpdate[key];

                        for(var i = 0; i < entitiesToUpdate.length; i++) {

                            var entityToUpdate = entitiesToUpdate[i];

                            if(key == 'transactions') {

                                db.sequelize.query("UPDATE `transactions` SET `heure`='*" + entityToUpdate.heure + "' WHERE `no_transaction` = " + entityToUpdate.no_transaction);

                            }
                            else if(key == 'recap_avoirs_achats') {

                                db.sequelize.query("UPDATE `recap_avoirs_achats` SET `heure`='*" + entityToUpdate.heure + "' WHERE `no_avoir` = " + entityToUpdate.no_avoir);

                            }
                            else if(key == 'recap_avoirs_rendus') {

                                db.sequelize.query("UPDATE `recap_avoirs_rendus` SET `heure`='*" + entityToUpdate.heure + "' WHERE `no_avoir_sorti` = " + entityToUpdate.no_avoir_sorti);

                            }
                            else {

                                entityToUpdate.heure = '*' + entityToUpdate.heure;
                                entityToUpdate.save().success(function() {
                                    console.log("HOUR UPDATED !");
                                });
                            }

                        }

                    }

                }

                loadHundredProduits();

            }

        });

    }, {}, {});

    console.log("sync");
}

var loadHundredProduits = function() {

    request({
        uri: config.values.apiURL + "/produits/light",
        method: "GET"
    }, function(error, response, body) {

        if(response != null && response.statusCode == 200) {

            console.log("GOT REPLY 200");

            var produits = JSON.parse(body);

            db.produits.bulkCreate(produits, {ignoreDuplicates : true});

        }

    });

}

db
    .sequelize
    .sync({ force: false })
    .complete(function(err) {
        if (err) {

            console.log(err);

        } else {

            console.log('DATABASE IS CONNECTED');

            http.createServer(app).listen(app.get('port'), function(){
                console.log('Express server listening on port ' + app.get('port'))
            })
        }
    })


setInterval(sync, 10000);