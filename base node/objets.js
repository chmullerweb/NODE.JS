//#########################//
//     Créer un objet     //
//########################//

//constructor = une méthode qui donne les attributs nécessaires pour construire l'objet; renseigné en paramètre
//this = représentation de l'objet dans lequel on travaille / contient toutes les propriétés de l'objet lorsque la valeur est définie. Il est préférable que la propriété this.propriete soit égale au nom du paramètre comme this.prix = prix

class BienImmobilier{
    constructor(prix, type, proprietaire){
        this.prix = prix
        this.type = type
        this.proprietaire = proprietaire
    }

    //méthode = une fonction appliquée à un objet
    //méthode de class = fonction dans un objet
    estAVendre(){
        //on précise this car c'est bien la donnée de l'objet qu'on vérifie
        return this.prix > 0 && this.proprietaire === undefined
    }
}

//on crée un objet avec new = cette version de l'objet est une instance. Les paramètres déclarés doivent être dans le même ordre que le constructor
let immeuble = new BienImmobilier(100000, "appartement", "moi")

//on affiche le résultat dans la console Node
console.log(immeuble.estAVendre());

// expression ternaire  >  if = ?  et else = : 

// ################ //
// HERITAGE         //
// ################//

//Faire des héritages d'objet: les propriétés BienImmobilier (class Mère) deviennent communes avec Immeuble (class Fille
//il faut préciser que la class Mère extends à la classe Fille
// + importer le constructor de la class Mère avec super (à la suite du constructor Fille) pour éviter de se répéter et avoir la déclaration commune à pls objet/class Fille un seul endroit dans mon code

class Immeuble extends BienImmobilier{
    constructor(prix, type, proprrietaire, nombre_chambre, possedeCuisine){
        super(prix, type, proprietaire)
        //Ces 3 propriétés ne sont pas déclarées car elles le sont dans la class Mère, class qui est commune avec d'autres objets/class Fille
        //this.prix
        //this.type
        //this.proprietaire
        this.nombre_chambre = nombre_chambre;
        this.possedeCuisine = possedeCuisine;
    }
}

// EXERCICE : créer un objet chien
function dateDiff(dateold, datenew)
{
  let ynew = datenew.getFullYear();
  let mnew = datenew.getMonth();
  let dnew = datenew.getDate();
  let yold = dateold.getFullYear();
  let mold = dateold.getMonth();
  let dold = dateold.getDate();
  let diff = datenew - dateold;
  if(mold > mnew) diff--;
  else
  {
    if(mold == mnew)
    {
      if(dold > dnew) diff--;
    }
  }
  return diff;
}

let today = new Date();
let age = '';

class Chien{
    constructor(race, nom, dateNaissance, pelage){
        this.race = race;
        this.nom = nom;
        this.dateNaissance = dateNaissance;
        this.pelage = pelage; 
    }
    age(){
       return (dateDiff(this.dateNaissance, today) / 31536000000).toFixed(0);
    }

    // ageAnniversaire(dateNaissance)
    // {
    // birthday = new Date(dateNaissance);
    // return new Number((new Date().getTime() - dateNaissance.getTime()) / 31536000000).toFixed(0);
    // }

    tourDeCirque(){
        console.log("Assis");
        return "Fais le beau et donne la patte";
    }
}

let chiotJuillet = new Chien("Corgi", "Peach", new Date("2019-05-01"), "tricolore");
console.log(chiotJuillet);

console.log(chiotJuillet.age() + " an(s)");

console.log(chiotJuillet.tourDeCirque());


// EXERCICE : créer un bestiaire pour mon animalerie

class Animaux{
    constructor(espece, nom, proprietaire){
        this.espace = espece
        this.nom = nom
        this.proprietaire = proprietaire
    }
}

class Chat extends Animaux{
    constructor(espece, nom, proprietaire, chasseur, pelage, aimeEnfant){
        super(espece, nom, proprietaire)
        this.chasseur = chasseur
        this.pelage = pelage
        this.aimeEnfant = aimeEnfant
    }
    estFeroce(){
        //par défaut la valeur est true lorsqu'elle est définie. Sinon c'est false/undefined
        if(this.chasseur && !this.aimeEnfant){
            return "Attention " + this.nom + " est féroce !!" 
        }
    }
}

let miaou = new Chat("Siamois", "Tintin", "Papa", true, "beige", false);
console.log(miaou)
console.log(miaou.estFeroce())

