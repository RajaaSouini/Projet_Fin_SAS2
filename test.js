const prompt = require('prompt-sync')();

//Step 1 
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

//step 2



//console.log(candidats);
//voters list

/*
let voters = [{firstname : "Rajaa",lastName: "Souini" , cin : "HH129107" ,candidatsCin: "AB123456" },
    {firstname : "Sara",lastName: "Hajji" , cin : "HA232345" ,candidatsCin: "KO786432" },
    {firstname : "Fahd",lastName: "Raji" , cin : "YO78653" ,candidatsCin: "KO786432" },
    {firstname : "Ahmed",lastName: "Lemdari" , cin : "HA12345" ,candidatsCin: "HH312673" },
    {firstname : "Amina",lastName: "Ouadi" , cin : "HH98765" ,candidatsCin: "DH7632" },
    {firstname : "Rajaa",lastName: "Wadih" , cin : "HH197807" ,candidatsCin: "AB123456" },
    {firstname : "Ayoub",lastName: "Salmi" , cin : "HH167817" ,candidatsCin: "AB123456" }
]; */

//step 3


function AfficherCandidatsTrier(candidats){
    let table = [];
    for(let i = 0 ; i< candidats.length ; i++){
        let count = 0 ; 
        for(let j = 0 ; j < voters.length ;j++ ){
            if(candidats[i].cin === voters[j].candidatsCin ){
                count += 1 ;
            }
        }
        table.push({CIN : candidats[i].cin , nom : candidats[i].nom , count : `${count}`});
        count = 0;
    }

    for(let i in table){
        for (let j = 0; j < table.length - 1 - i; j++) {
        if (table[j].count < table[j + 1].count) {
        let temp = table[j];
        table[j] = table[j + 1];
        table[j + 1] = temp;
        }
    }
    }
    //console.log(table);

    for(let i in table){
        console.log( ` Nom :${table[i].nom } ` );
        console.log(` CIN : ${table[i].CIN}`);
        console.log("--------------------");
    }
}

function test(candidats){
    let table = [];

    for(let i = 0 ; i< candidats.length ; i++){
        
    }
}
AfficherCandidatsTrier(candidats);


