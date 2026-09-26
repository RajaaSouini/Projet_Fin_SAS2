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
let candidatsTrier = candidats.slice();
function afficher() {

    for (let a = 0; a < candidatsTrier.length - 1; a++) {
        for (let b = 0; b < candidatsTrier.length - 1 - a; b++) {
            if (candidatsTrier[b].voters.length < candidatsTrier[b + 1].voters.length) {
                let temp = candidatsTrier[b];
                candidatsTrier[b] = candidatsTrier[b + 1];
                candidatsTrier[b + 1] = temp;
            }
        }
    }

    afficherListe(candidatsTrier);
    

}
afficher();
//afficher();


function FiltrerParPartiPolitique(candidats , partiPolitique){
    for(let i of candidats){
        if(i.politicalParty === partiPolitique){
            AfficherCandidat(i);
        }
    }


}
//FiltrerParPartiPolitique(candidats , "PJD");


//voter pour un candidat 
function voter(){

    let cinVoter = prompt("entre ta cin");
    let cinCandidat = prompt("entre cin du candidat sur lequel tu veux voter");

    /*
    for(let i of candidats){
        if(i.voters.includes(cinVoter)){
            console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau");
            return;
        }
    }
    */
    for(let i of candidats){
        if(i.cin === cinCandidat){
            i.voters.push(cinVoter);
        }
    }
}
//voter();
//afficher();

function ModifierCandidat(){
    let cinCandidat = prompt("enter le cin du candidat duquel vous souhaiter faire un changement ");

    let newPartiPolitique = prompt("entrer la nouvelle parti politique");
    let newAge = Number(prompt("entrer l'age du candidat"));

    for(let i = 0 ; i< candidats.length ; i++){
        if(candidats[i].cin === cinCandidat){
            candidats[i].age = newAge;
            candidats[i].politicalParty = newPartiPolitique;
        }
    }
}

//ModifierCandidat();
//afficher();

function SupprimerCandidat(){
    let cinC = prompt("entrer le cin du candidat");

    for(let i = 0 ; i< candidats.length ; i++){
        if (candidats[i].cin == cinC){
            candidats.splice(i , i);
        }
    }
}

//SupprimerCandidat();
//afficher();

//rechercher un candidat

function RechercherCandidat(){
    let nomC = prompt("entre le nom du candidats");
    for(let i of candidats){
        if(i.lastName === nomC){
            AfficherCandidat(i);
        }
    }
}
//RechercherCandidat();

//statistiques de l'élection 
function StatistiqueElection(){
    console.log("le nombre total des candidats est :" , candidats.length);
    let sum = 0 ;
    for(let i of candidats){
        sum += i.voters.length;
    }
    console.log("le nombre total des votes dans l'élection est : " , sum);


    
    console.log("les top 3 dans lélection sont : ", candidatsTrier.slice(0,3));
}
StatistiqueElection();








