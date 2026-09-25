//Step 1 

const candidats = [{
    cin: "AB123456",
	nom: "Boushaba",
	prenom: "Soufiane",
	partiPolitique: "Indépendant",
	age: 40,
	electeurs: []
}];
//step 2

candidats.push({
	cin: "HH312673",
	nom: "Allali",
	prenom: "Salma",
	partiPolitique: "PAM",
	age: 22,
	electeurs: []
},
{
	cin: "KO786432",
	nom: "Rhazoui",
	prenom: "Fahd",
	partiPolitique: "Indépandant",
	age: 24,
	electeurs: []
},
{
	cin: "DH7632",
	nom: "Alami",
	prenom: "Hiba",
	partiPolitique: "PI",
	age: 20,
	electeurs: []
});

//console.log(candidats);
//voters list

let voters = [{firstname : "Rajaa",lastName: "Souini" , cin : "HH129107" ,candidatsCin: "AB123456" },
    {firstname : "Sara",lastName: "Hajji" , cin : "HA232345" ,candidatsCin: "KO786432" },
    {firstname : "Fahd",lastName: "Raji" , cin : "YO78653" ,candidatsCin: "KO786432" },
    {firstname : "Ahmed",lastName: "Lemdari" , cin : "HA12345" ,candidatsCin: "HH312673" },
    {firstname : "Amina",lastName: "Ouadi" , cin : "HH98765" ,candidatsCin: "DH7632" },
    {firstname : "Rajaa",lastName: "Wadih" , cin : "HH197807" ,candidatsCin: "AB123456" },
    {firstname : "Ayoub",lastName: "Salmi" , cin : "HH167817" ,candidatsCin: "AB123456" }
];

//step 3

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



