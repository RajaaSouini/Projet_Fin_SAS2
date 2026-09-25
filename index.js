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

AjouterCandidats();
