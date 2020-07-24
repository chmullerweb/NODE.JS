//##################################//
// Communiquer avec le serveur REDIS//
//##################################//

//appeler le serveur "redis"
const redis = require("redis")
//créer le client pour faire des appel au serveur redis
const client = redis.createClient()

//je crée une key "test", assigne une valeur "wololo", effectue une action callback une fois que le set est terminé. Attention ! l'ordre en paramètre doit rester le même (err = réucpère les erreurs) - (resp = récupère la réponse de notre première action)
client.set("test", "wololo", (err, res) => {
    console.log(err)
    console.log(res)
})

//EXEMPLE AVEC IMMEUBLE
//appeler le serveur "redis"
const redisImmo = require("redis");
const { resolveCname } = require('dns');
//créer le client pour faire des appels au serveur redis
const clientImmo = redis.createClient()


clientImmo.get("immeuble", (err, res) => {
    let adresseImmeuble = res
    console.log(adresseImmeuble)
})

clientImmo.lrange("immeuble:appartement", 0, -1, (err, res) => {
    let appartements = res
    console.log(appartements)
    //pour éviter les erreurs ou si ma fonction callback ne prend pas le relai assez vite, il est préférable de parcourir le 'res' dans la fonction callback 
    for (const appartement of appartements){
        client.hgetall(appartement), (err, res) => {
            console.log(res)
            let appartement = new appartement(res.numero, res.cuisine)
        }
    }
})
