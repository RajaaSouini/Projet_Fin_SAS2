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
afficher();