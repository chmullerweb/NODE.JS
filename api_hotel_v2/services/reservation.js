const redis = require('redis')
const accessBdd = redis.createClient()

function sendToRedis(newReservation) { 
    accessBdd.hset( 
       `numeroResa:${newReservation.idReservation}`,
       "idReservation", newReservation.idReservation,
       "dateEntree", newReservation.dateEntree,
        "dateSortie", newReservation.dateSortie,
       "numeroChambre", newReservation.numeroChambre,
       "numeroClient", newReservation.numeroClient,
       (err, res) => {
           console.log(err) 
           console.log(res)
       }
   )
}

function getFromRedis(idDeLaResa, callback) {
   return accessBdd.hgetall(`numeroResa:${idDeLaResa}`, callback)
}

