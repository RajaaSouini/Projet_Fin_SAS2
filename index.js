const prompt = require('prompt-sync')();

const candidats = [
  { cin: "AB123456", lastName: "Boushaba", firstName: "Soufiane", politicalParty: "Independent", age: 40,
    voters: [] },
  { cin: "CD234567", lastName: "El Amrani", firstName: "Fatima Zahra", politicalParty: "PJD", age: 35,
    voters: ["AB123456", "GH456789", "KL678901"] },
  { cin: "EF345678", lastName: "Chraibi", firstName: "Younes", politicalParty: "RNI", age: 45,
    voters: [] },
  { cin: "GH456789", lastName: "Bennani", firstName: "Salma", politicalParty: "PAM", age: 29,
    voters: ["IJ567890"] },
  { cin: "IJ567890", lastName: "Ouahbi", firstName: "Karim", politicalParty: "Istiqlal", age: 52,
    voters: [] },
  { cin: "KL678901", lastName: "Ziani", firstName: "Nadia", politicalParty: "Independent", age: 33,
    voters: [] },
  { cin: "MN789012", lastName: "Tazi", firstName: "Hamza", politicalParty: "USFP", age: 60,
    voters: ["QR901234"] },
  { cin: "OP890123", lastName: "Idrissi", firstName: "Meryem", politicalParty: "PJD", age: 27,
    voters: [] },
  { cin: "QR901234", lastName: "Berrada", firstName: "Omar", politicalParty: "RNI", age: 38,
    voters: ["CD234567", "EF345678", "MN789012"] },
  { cin: "ST012345", lastName: "Fassi", firstName: "Khadija", politicalParty: "PAM", age: 31,
    voters: [] },
];


//l ajout d'un candidat 
function AjouterCandidats(){
    console.log("ajouter un nouveau condidat");

    let cin = prompt("entre le cin candidat");

    let cinExist = false;
    for(let i = 0 ; i<candidats.length ; i++){
        if (candidats[i].cin === cin){
            cinExist = true;
        }
    }

    if(cinExist){
        console.log("le cin existe déjà tu ne peux pas ajouter ce candidat");
        return;
    }

    let nom = prompt("entre le nom du candidat");
    let prenom = prompt("entre le prenom du candidat");
    let age = Number(prompt("entre l'age du candidat"));
    let partiPolitique = prompt("entre la parti politique du candidat");

    if(partiPolitique === ""){
        partiPolitique = "indépendant";
    }

    let nouveauCandidat = {
        nom : nom ,
        cin : cin,
        age : age ,
        partiPolitique : partiPolitique ,
        prenom : prenom
    }

    candidats.push(nouveauCandidat);
    console.log("le candidat ajouté avec succes");
}


//l ajout de pls candidats 

function AjouterPlusieursC(){
    console.log("Ajoutons plusieurs candidats à la fois");

    let nombreC = parseInt(prompt("entre le nombre de candidats que tu souhaite ajouter"));

    let i = 1 ; 
    while(i <= nombreC){
        console.log("entre le candidat " , i);
        AjouterCandidats();
        i++ ;
    }
}

//AjouterPlusieursC();

//l affichage des candidats 
function AfficherCandidat(candidat){
    for(let i in candidat){
        if (i === "voters"){
            console.log("cin : ",candidat.cin);
            console.log("nom :"  , candidat.lastName);
            console.log("prenom : " ,candidat.firstName);
            console.log("age :"  , candidat.age);
            console.log("parti politique :" , candidat.politicalParty);
            console.log("le nombre de vote est " , candidat[i].length);
            console.log("---------------------")
        }
    }
}

//AfficherCandidat(candidats[1]);


function afficherListe(liste) {
  if (liste.length === 0) {
    console.log("aucun candidat à afficher");
    return;
  }
 
  for (let i = 0; i < liste.length; i++) {
    AfficherCandidat(liste[i]);//, i
  }

}

//afficherListe(candidats);

function afficher() {

    for (let a = 0; a < candidats.length - 1; a++) {
        for (let b = 0; b < candidats.length - 1 - a; b++) {
            if (candidats[b].voters.length < candidats[b + 1].voters.length) {
                let temp = candidats[b];
                candidats[b] = candidats[b + 1];
                candidats[b + 1] = temp;
            }
        }
    }

    afficherListe(candidats);

}
//afficher();


function FiltrerParPartiPolitique(candidats , partiPolitique){
    for(let i of candidats){
        if(i.politicalParty === partiPolitique){
            AfficherCandidat(i);
        }
    }


}
FiltrerParPartiPolitique(candidats , "PJD");






