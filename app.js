var magasin = "Principale";
var apiURL = "http://localhost:3000/pushEverything"
var request = require('request');
var bodyParser = require('body-parser');

var express = require('express')
    , routes  = require('./routes')
    , http    = require('http')
    , path    = require('path')
    , db      = require('./models')

var app = express()

// all environments
app.set('port', process.env.PORT || 3001)
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
    var datestring = yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);

    return datestring;

}

var buildDataJson = function(callback, data) {

    db.transactions.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(transactions) {

        data.transactions = JSON.stringify(transactions);

        db.produits_encaisses.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(produits_encaisses) {

            data.produits_encaisses = JSON.stringify(produits_encaisses);

            db.recap_achats.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_achats) {

                data.recap_achats = JSON.stringify(recap_achats);

                db.recap_argent_entre_dans_caisse.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_argent_entre_dans_caisse) {

                    data.recap_argent_entre_dans_caisse = JSON.stringify(recap_argent_entre_dans_caisse);

                    db.recap_argent_pris_de_caisse.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_argent_pris_de_caisse) {

                        data.recap_argent_pris_de_caisse = JSON.stringify(recap_argent_pris_de_caisse);

                        db.recap_avoirs_achats.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_avoirs_achats) {

                            data.recap_avoirs_achats = JSON.stringify(recap_avoirs_achats);

                            db.recap_avoirs_entres.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_avoirs_entres) {

                                data.recap_avoirs_entres = JSON.stringify(recap_avoirs_entres);

                                db.recap_avoirs_rendus.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_avoirs_rendus) {

                                    data.recap_avoirs_rendus = JSON.stringify(recap_avoirs_rendus);

                                    db.recap_echanges_directs_entres.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_echanges_directs_entres) {

                                        data.recap_echanges_directs_entres = JSON.stringify(recap_echanges_directs_entres);

                                        db.recap_remises_entres.findAll({where: ["heure NOT LIKE ?", '%*%']}).success(function(recap_remises_entres) {

                                            data.recap_remises_entres = JSON.stringify(recap_remises_entres);

                                            db.recap_global.find({where: { magasin : magasin, date : getCurrentDate() }}).success(function(recap_global) {

                                                data.recap_global = JSON.stringify(recap_global);

                                                callback(data);

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

    buildDataJson(function(data) {

        request({
            uri: apiURL,
            method: "POST",
            form: data
        }, function(error, response, body) {
            console.log(body);
        });

    }, {});

    console.log("sync");
}

db
    .sequelize
    .sync({ force: false })
    .complete(function(err) {
        if (err) {
            throw err
        } else {
            http.createServer(app).listen(app.get('port'), function(){
                console.log('Express server listening on port ' + app.get('port'))
            })
        }
    })


setInterval(sync, 10000);