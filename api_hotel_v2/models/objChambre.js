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
}