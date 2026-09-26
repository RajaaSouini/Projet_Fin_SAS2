function estPremier(nombre){
    let estPremier = true;
    for(let i = 2 ; i< nombre ; i++){
       if(nombre % i === 0){
        estPremier = false;
       }
    }
    return estPremier;
}

console.log(estPremier(14));