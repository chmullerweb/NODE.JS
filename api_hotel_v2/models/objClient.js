//on crée un fichier propre à la class Client

class Client {
    constructor(identifiantClient, nom, prenom, adresse, email) {
        this.identifiantClient = identifiantClient  //int
        this.nom = nom                              //string
        this.prenom = prenom                        //string
        this.adresse = adresse                      //string
        this.email = email                          //string
    }
    //à partir des data de Redis, je reconstruis un objet 
   static fromRedis(data) {
        return Object.assign(new Client(), data)
    }
}

exports.Client = Client;