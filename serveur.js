// Configurer le serveur node.js
// si url existe pas > erreur 404

var http = require('http');
//require 'url' pour accéder à l'objet url et intervenir dessus
var url = require('url');

var server = http.createServer(function (req, res) {
    //l'url est découpé en json pour accéder plus facilement aux infos qu'il contient
    //ici j'accède au chemin après l'extension (.fr / .com etc...)
    var page = url.parse(req.url).pathname;
    console.log(page);
    //j'écris le statut de la requête et précise que le contenu est du texte pour que le navigateur sache comment traité les infos
    res.writeHead(200, {"Content-Type": "text/plain"});  //text/plan = text/html, charset=utf-8
    if (page == '/') {
        //j'écris la réponse suite à la requête
        res.write('Vous êtes à l\'accueil, que puis-je faire pour vous ?');
    } else if (page == '/sous-sol') {
        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    } else if (page == '/etage/1/chambre') {
        res.write('Hé ho, c\'est privé ici !');
    } else {
        //si aucune des pages demandées ne répond aux conditions else if plus haut, alors je crée une erreur 404 et j'écris "Error 404"
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write('Error 404');
    }
    //la requête est terminée
    res.end();
});
console.log("serveur lancé")
server.listen(8080);