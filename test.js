const tableau = [ 
  { CIN: 'AB123456', nom: 'Boushaba', count: '3' }, 
  { CIN: 'HH312673', nom: 'Allali', count: '1' }, 
  { CIN: 'KO786432', nom: 'Rhazoui', count: '2' }, 
  { CIN: 'DH7632', nom: 'Alami', count: '1' } 
];

// Algorithme du tri à bulles (Bubble Sort) inversé pour du décroissant
for (let i = 0; i < tableau.length; i++) {
  for (let j = 0; j < tableau.length - 1 - i; j++) {
    // Conversion en nombre pour comparer correctement les valeurs de 'count'
    if (Number(tableau[j].count) < Number(tableau[j + 1].count)) {
      // Échange des deux éléments
      let temp = tableau[j];
      tableau[j] = tableau[j + 1];
      tableau[j + 1] = temp;
    }
  }
}

console.log(tableau);
