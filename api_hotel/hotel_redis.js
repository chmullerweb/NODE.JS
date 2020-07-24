// Le fichier hotel_redis.js contient toutes les commandes pour effectuer les requêtes, récupérer des données et créer les instances (ligne 4 à 28)
//##########################################################################################################################"######//

// On a pas besoin de spécifier le chemin exacte lorsqu'on appelle des fichiers contenus dans node_modules
//on importe le ficher hotel_model.js SANS préciser son extension
const {Chambre, Client, Reservation} = require('./hotel_model')
//importe un fichier pour récupérer une fonction qui génère des nombres/id aléatoirement (uuid)
const outils = require('./fonctions')


 //je crée un nouveau client et l'envoie à Redis. Elle s'appelle Mimi
 let Mimi = new Client(outils.uuidv4(), "Jannet", "Mimi", "3 rue des fourmilles", "mimi@test.com" )
 Client.sendToRedis(Mimi)

 //je récupère la variable Mimi depuis la bdd
 Client.getFromRedis(Mimi.identifiantClient, (err, res) =>{
     //je récupère la réponse mais elle ne sont pas rangées selon le constructor de l'objet
     //console.log(res)
     //j'appelle l'Objet et range les données selon son constructor
     console.log(Client.fromRedis(res))
 })

 //je récupère depuis la bdd via l'id du client, les données associées
Client.getFromRedis('test', (err, res) => {
    console.log(err)
    console.log(res) 
 })


// #############################################################
// Morceaux de code qui devient une méthode de class static ou qui est utilisé dans le fichier hotel_model.js car non appelé dans ce fichier

// on appelle le module 'redis' installé via des packets npm depuis le cmd du dossier du projet
const redis = require('redis')
// créer un client/un accès pour communiquer avec le serveur Redis
const accessBdd = redis.createClient()

//nommer et définir avec des valeurs ce client/cette instance
let clientHotel = new Client(
    outils.uuidv4(),
    "Louis", //nom
    "Romano", //prenom
    "16 rue de la Sangria", //adresse
    "romanolouis@gmail.com" //email
)
console.log(clientHotel)

//j'envoie à Redis les infos du clientHotel via hset
accessBdd.hset(
    "idclient:test", //nom de la clé des données qui seront envoyées à Redis
    //entre "le nom de la propriété // constructor de l'objet", sa value
    "identifiantClient", clientHotel.identifiantClient, 
    "nom", clientHotel.nom,
    "prenom", clientHotel.prenom,
    "adresse", clientHotel.adresse,
    "email", clientHotel.email,
    (err, res) => {
        console.log(err)
        console.log(res)
    }
)

//récupérer les infos du client depuis la base de donnée
accessBdd.hgetall("idclient:test" , (err, res) => {
    console.log(err)
    let clientHotel = Client.fromRedis(res)
    console.log(clientHotel)
})


 // #############################################################
// Création d'une instance Chambre à envoyer à la bdd

// j'insère dans la bdd une chambreHotel
let chambreHotel = new Chambre(
    "32", //numeroChambre 
    "100€", //prix
    "3", //nbLit
    "true", //possedeSalleDeBain
)
console.log(chambreHotel)


accessBdd.hset(
    //je crée ma clé pour identifier ma nouvelle entrée dans le tableau Chambre
    "idChambre:chambreHotel.numeroChambre",
    "numeroChambre", chambreHotel.numeroChambre,
    "prix", chambreHotel.prix,
    "nbLit", chambreHotel.nbLit,
    "possedeSalleDeBain", false,
    "balcon", false,
    "terrasse", false,
    "clim", true,
    "accepteAnimaux", false,
    "accepteEnfant", false,
    "etage", "5",
    "estDisponible", false,
    "litKingSize", true,
    "optionPetalesDeRose", true,
    (err, res) => {
        console.log(err)
        console.log(res)
    }
)

