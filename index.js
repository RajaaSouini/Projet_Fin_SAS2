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
    console.log("Ajouter un nouveau condidat");

    let cin = prompt("Entre le cin candidat");

    let cinExist = false;
    for(let i = 0 ; i<candidats.length ; i++){
        if (candidats[i].cin === cin){
            cinExist = true;
        }
    }

    if(cinExist || cin.trim() === ""){
        console.log("le cin existe déjà ou le champ est vide");
        return;
    }

    let nom = prompt("entre le nom du candidat");
    if(nom.trim() === ""){
        console.log("tu n'as pas entrer un nom ");
        return;
    }
    let prenom = prompt("entre le prenom du candidat");
    if(prenom.trim() === ""){
        console.log("le champ est vide");
        return;
    }
    let age = Number(prompt("entre l'age du candidat"));
    if(age < 18  || (typeof age !== Number || age.trim() === "")){
        console.log("l'age est moins que 18 ans ou tu n as pas entrer un age");
        return;
    }
    let partiPolitique = prompt("entre la parti politique du candidat");

    if(partiPolitique === ""){
        partiPolitique = "indépendant";
    }

    let nouveauCandidat = {

        cin : cin,
        lastName : nom,
        firstName : prenom,
        politicalParty : partiPolitique,
        age : age,
        voters : []
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
    AfficherCandidat(liste[i]);
  }

}

//afficherListe(candidats);


function trierParVotesDecroissant(liste){
    let copie = liste.slice(); 

    for (let a = 0; a < copie.length - 1; a++) {
        for (let b = 0; b < copie.length - 1 - a; b++) {
            if (copie[b].voters.length < copie[b + 1].voters.length) {
                let temp = copie[b];
                copie[b] = copie[b + 1];
                copie[b + 1] = temp;
            }
        }
    }

    return copie;
}


function afficher() {
    let candidatsTries = trierParVotesDecroissant(candidats);
    afficherListe(candidatsTries);
}


function FiltrerParPartiPolitique(candidats , partiPolitique){
    for(let i of candidats){
        if(i.politicalParty.toUpperCase() === partiPolitique.toUpperCase()){
            AfficherCandidat(i);
        }
    }


}
//FiltrerParPartiPolitique(candidats , "PJD");



function AfficherMenuCandidats(){
    console.log("1. Afficher tous les candidats");
    console.log("2. Trier par nombre de votes ");
    console.log("3. Filtrer par parti politique");

    let choix = prompt("ton choix : ");

    switch(choix){
        case "1":
            afficherListe(candidats);
            break;
        case "2":
            afficher();
            break;
        case "3":
            let parti = prompt("entre le parti politique : ");
            FiltrerParPartiPolitique(candidats, parti);
            break;
        default:
            console.log("choix invalide");
    }
}


//voter pour un candidat 
function voter(){

    let cinVoter = prompt("entre ta cin ");


    for(let i of candidats){
        if(i.voters.includes(cinVoter)){
            console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau");
            return;
        }
    }

    let cinCandidat = prompt("entre cin du candidat sur lequel tu veux voter ");
    
    let trouve = false;
    for(let i of candidats){
        if(i.cin === cinCandidat){
            i.voters.push(cinVoter);
            trouve = true;
        }
    }

    if(trouve){
        console.log("ton vote a été enregistré, merci !");
    } else {
        console.log("aucun candidat trouvé avec ce cin, ton vote n'a pas été pris en compte");
    }
}
//voter();
//afficher();

function ModifierPartiPolitique(){
    let cinCandidat = prompt("enter le cin du candidat duquel vous souhaiter faire un changement ");

    let newPartiPolitique = prompt("entrer la nouvelle parti politique");

    for(let i = 0 ; i< candidats.length ; i++){
        if(candidats[i].cin === cinCandidat){
            candidats[i].politicalParty = newPartiPolitique;
        }
    }
}

function ModifierAge(){
     let cinCandidat = prompt("enter le cin du candidat duquel vous souhaiter faire un changement ");
    let newAge = Number(prompt("entrer l'age du candidat"));

    for(let i = 0 ; i< candidats.length ; i++){
        if(candidats[i].cin === cinCandidat){
            candidats[i].age = newAge;
        }
    }

}
//ModifierPartiPolitique();
//ModifierAge();
//afficher();

function SupprimerCandidat(){
    let cinC = prompt("entrer le cin du candidat");

    let index = -1;
    for(let i = 0 ; i < candidats.length ; i++){
        if (candidats[i].cin == cinC){
            index = i;
        }
    }
 
    if(index === -1){
        console.log("aucun candidat trouvé avec ce cin");
        return;
    }
    
    for(let i = index ; i < candidats.length - 1 ; i++){
        candidats[i] = candidats[i + 1];
    }
    candidats.pop();
    console.log("le candidat a été supprimé");
}

//SupprimerCandidat();
//afficher();

//rechercher un candidat

function RechercherCandidat(){
    let nomC = prompt("entre le nom du candidat : ");
 
    let trouve = false;
    for(let i of candidats){
        if(i.lastName === nomC){
            AfficherCandidat(i);
            trouve = true;
        }
    }
 
    if(!trouve){
        console.log("aucun candidat trouvé avec ce nom");
    }
}
//RechercherCandidat();

//statistiques de l'élection 
//total candidat
function AfficherTotalCandidat(){
    console.log("Le nombre total des candidats est : " , candidats.length);
}
//totalVotes
function TotalVotesElection(){
    let sum = 0 ;
    for(let i of candidats){
        sum += i.voters.length;
    }
    console.log("le nombre total des votes dans l'élection est : " , sum);
}
//top 3
function topCandidats(){
    let topC = trierParVotesDecroissant(candidats).slice(0,3);
    console.log("les top 3 dans lélection sont : ");
    for(let i = 0 ; i< topC.length ; i++){
        console.log((i + 1) + " " + topC[i].firstName + " " + topC[i].lastName);
    }

}
//nombre de candidats par parti politique

function NombreCparPartiPolitique(){
    console.log("Le nombre de candidat par partiPolitique :");
    const nbrCandidatParParti = {};
    for(let i = 0 ; i < candidats.length ; i++){
        let elem = candidats[i].politicalParty;
        if(! (elem in nbrCandidatParParti)){
            nbrCandidatParParti[elem] = 1 ; 
        }else{
            nbrCandidatParParti[elem] += 1 ;
        }
    }
    for(let parti in nbrCandidatParParti){
        console.log(parti , nbrCandidatParParti[parti])
    }
}
function StatistiqueElection(){
    AfficherTotalCandidat();
    TotalVotesElection();
    topCandidats();
    NombreCparPartiPolitique();
}
//let a = afficher();
//StatistiqueElection(); 



function Menu(){

    let continuer = true;

    while(continuer){
        console.log(" 1 . Ajouter un nouveau candidat");
        console.log(" 2 . Ajouter plusieurs candidats à la fois");
        console.log(" 3 . Afficher la liste des candidats");
        console.log(" 4 . Voter pour un candidat");
        console.log(" 5 . Modifier les informations d'un candidat");
        console.log(" 6 . Supprimer un candidat");
        console.log(" 7 . Rechercher des candidats");
        console.log(" 8 . Statistiques de l'election");
        console.log(" 0 . Quitter");

        let nombre = Number(prompt("entre le nombre de l'operation souhaiter :"))
        switch (nombre){
            case 1 :
                AjouterCandidats();
                break;
            case 2 :
                AjouterPlusieursC();
                break;
            case 3 :
                AfficherMenuCandidats();
                break;
            case 4 :
                voter();
                break;
            case 5 :
                let n = Number(prompt("1 . age / 2 . partiPolitique : "));
                if ( n === 1){
                    ModifierAge();
                }else if (n === 2){
                    ModifierPartiPolitique();
                }
                break;
            case 6 :
                SupprimerCandidat();
                break;
            case 7 :
                RechercherCandidat();
                break;
            case 8 :
                StatistiqueElection();
                break;
            case 0 :
                console.log("au revoir");
                continuer = false;
                break;
            default :
                console.log("choix invalide reessayer");
        }
    }
}
Menu();

//AfficherCandidat(candidats[0]);

//AjouterPlusieursC();
//afficherListe(candidats);
//afficher();
//FiltrerParPartiPolitique(candidats, "PJD")
//voter()
//ModifierAge();
//ModifierPartiPolitique();
//SupprimerCandidat();
//RechercherCandidat();
//afficher();
//AfficherTotalCandidat()
//TotalVotesElection();
//topCandidats();
//NombreCparPartiPolitique();