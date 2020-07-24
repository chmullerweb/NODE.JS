class Reservation {
    constructor(idReservation, dateEntree, dateSortie, numeroChambre, numeroClient) {
        this.idReservation = idReservation  //uuid
        this.dateEntree = dateEntree  //Date()
        this.dateSortie = dateSortie // Date()
        this.numeroChambre = numeroChambre //identifiant chambre
        this.numeroClient = numeroClient   //identifiant client
    }
}