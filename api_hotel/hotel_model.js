// Le fichier hotel_model.js contient toutes les class (=objet) nécessaires à mon projet
//#######################################################################################//

//j'importe REDIS dans mon fichier hotel_model afin d'accéder à REDIS et ses fonctions
const redis = require('redis')

// Pour mon projet d'API, je dois créer les class/objets que je vais récupérer/get lors de mon appel d'API
class Chambre {
    constructor(
        numeroChambre,
        prix,
        nbLit,
        possedeSalleDeBain,
        balcon,
        terrasse,
        clim,
        accepteAnimaux,
        accepteEnfant,
        etage,
        estDisponible,
        litKingSize,
        optionPetalesDeRose
    ) {
        this.numeroChambre = numeroChambre  //int
        this.prix = prix                    //int
        this.nbLit = nbLit                  //int
        this.possedeSalleDeBain = possedeSalleDeBain    //boolean
        this.balcon = balcon                            //boolean
        this.terrasse = terrasse                        //boolean
        this.clim = clim                                //boolean
        this.accepteAnimaux = accepteAnimaux            //boolean    
        this.accepteEnfant = accepteEnfant              //boolean
        this.etage = etage                              //int
        this.estDisponible = estDisponible         //boolean
        this.litKingSize = litKingSize                  //boolean
        this.optionPetalesDeRose = optionPetalesDeRose  //boolean
    }
    estDisponible() {
        if (this.estDisponible === true) {
            console.log("La chambre peut être réservée. Les objets Reservation et Client peuvent être remplis")
        }
    }
    isLyndaProof() {
        return this.clim === true && this.terrasse === true
    }
}

class Reservation {
    constructor(idReservation, dateEntree, dateSortie, numeroChambre, numeroClient) {
        this.idReservation = idReservation  //uuid
        this.dateEntree = dateEntree  //Date()
        this.dateSortie = dateSortie // Date()
        this.numeroChambre = numeroChambre //identifiant chambre
        this.numeroClient = numeroClient   //identifiant client
    }
}

class Client {
    constructor(identifiantClient, nom, prenom, adresse, email) {
        this.identifiantClient = identifiantClient  //int
        this.nom = nom                              //string
        this.prenom = prenom                        //string
        this.adresse = adresse                      //string
        this.email = email                          //string
    }
    //je précise à Redis de bien me renvoyer les data selon le constructor de l'objet Client
    static fromRedis(data) {
        return Object.assign(new Client(), data)
    }

     //envoyer la nouvelle instance Client dans REDIS avec en paramètre le nouvel objet client via la fonction sendToRedis et .hset
    static sendToRedis(newClient) { 
        //je crée l'accès pour communiquer avec la bdd
        let accessBdd = redis.createClient()
        //j'envoie à Redis les infos du newClient via hset
        accessBdd.hset( 
            //je crée ma hashmap selon les infos du constructor de l'objet
            //nom de la clé (=étiquette) sous lequel seront envoyées les données du newClient à Redis
            `idclient:${newClient.identifiantClient}`,
            //entre "", j'écris le nom de la propriété inspiré des propriétés du constructor de l'objet, sa value
            //Attention, il faut bien séparer les éléments par une ',' car les données sont envoyées sous forme de string et non de tableau #JSONstyle
            "identifiantClient", newClient.identifiantClient,
            "nom", newClient.nom,
            "prenom", newClient.prenom,
            "adresse", newClient.adresse,
            "email", newClient.email,
            // appel du callback dès que la fonction est terminée pour que la bdd puisse "nous parler"
            (err, res) => {
                console.log(err) 
                //renvoie la réponse de la part de Redis = le nombre de valeur créée pour l'objet
                console.log(res)
            }
        )
    }
    //récupérer un objet JSON from REDIS et le transformer en objet JS avec la fonction getFromRedis et .hgetall 
    static getFromRedis(idClientDeLaBdd, callback) {
        //je recrée l'accès pour recommuniquer avec la bdd
        let accessBdd = redis.createClient()
        return accessBdd.hgetall(`idclient:${idClientDeLaBdd}`, callback)
    }
}


// On exporte les class pour les traiter ailleurs dans mon projet
exports.Chambre = Chambre
exports.Reservation = Reservation
exports.Client = Client

