//le fichier client.js fait référence à l'objet CLIENT. Les fonctions définie en static sont rangées dans ce fichier à part, fichier qui communique avec la bdd. Tous les fichiers qui vont communiqués avec la bdd sont classés dans le dossier SERVICES

//on importe la const redis pour accéder à la bdd
const redis = require('redis')

//on crée un accès global à la bdd (plus à l'intérieur de chaque fonction) Cela évite de créer aussi systématiquement un accès à la bdd dès que la fonction est appellée
let accessBdd = redis.createClient()


function sendToRedis(newClient) { 
     accessBdd.hset( 
        `idclient:${newClient.identifiantClient}`,
        "identifiantClient", newClient.identifiantClient,
        "nom", newClient.nom,
        "prenom", newClient.prenom,
        "adresse", newClient.adresse,
        "email", newClient.email,
        (err, res) => {
            console.log(err) 
            console.log(res)
        }
    )
}

function getFromRedis(idClientDeLaBdd, callback) {
    return accessBdd.hgetall(`idclient:${idClientDeLaBdd}`, callback)
}
