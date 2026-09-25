# Projet Fin SAS 2 : Gestion des Élections et Listes Électorales au Maroc

## Introduction

Créez une application pour gérer une campagne électorale. L'application permettra de gérer les listes de candidats, d'enregistrer des votes, et d'afficher des statistiques détaillées sur l'élection.

## Contexte du projet

L'application doit comporter un menu principal permettant d'effectuer les opérations suivantes :

### 1. Ajouter un nouveau candidat

Un candidat est défini par un identifiant unique (ex: CIN), un nom, un prénom, un parti politique (ou `"Indépendant"`), son âge et une liste de CIN des personnes ayant voté pour lui (électeurs) (tableau initialement vide).

```javascript
const candidats = [{
	cin: "AB123456",
	nom: "Boushaba",
	prenom: "Soufiane",
	partiPolitique: "Indépendant",
	age: 40,
	electeurs: []
}];
```

### 2. Ajouter plusieurs candidats à la fois

### 3. Afficher la liste des candidats

Afficher tous les détails (Identifiant, nom, prénom, Parti politique, Âge, Nombre de votes (calculé à partir de la liste des CIN des électeurs)) selon plusieurs vues :

- Trier les candidats par nombre de votes (ordre décroissant pour voir les gagnants).
- Filtrer et afficher uniquement les candidats d'un parti politique spécifique.

```
# Candidat 1:
CIN: AB12345
Nom: Alae
-------------
# Candidat 2:
CIN: AB12345
Nom: Alae
-------------
```

### 4. Voter pour un candidat

- Demander à l'électeur de saisir sa propre CIN.
- Vérifier si l'électeur a le droit de voter (si sa CIN n'existe dans aucune des listes de votes d'un candidat).
- Demander l'identifiant ou la CIN du candidat, puis ajouter la CIN de l'électeur à la liste des votes du candidat.

Si la CIN de l'électeur existe déjà dans une liste de votes, afficher le message :

> « Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau »

### 5. Modifier les informations d'un candidat

- Modifier le parti politique d'un candidat.
- Modifier l'âge d'un candidat.

### 6. Supprimer un candidat

- Supprimer un candidat de la liste via son CIN (ex: retrait de candidature).

### 7. Rechercher des candidats

- Rechercher un candidat par son Nom.

### 8. Statistiques de l'élection

- Afficher le nombre total de candidats.
- Afficher le nombre total de votes exprimés dans toute l'élection.
- Afficher le Top 3 des candidats ayant le plus de votes.
- Afficher le nombre de candidats par parti politique.

**N.B :** L'utilisateur doit revenir au menu principal après chaque opération.

---

## Contraintes techniques

Le projet doit être réalisé en **JavaScript avec Node.js**.

Les notions principalement attendues sont :

- variables et constantes ;
- opérateurs ;
- if / else ;
- switch ;
- for ;
- while ;
- fonctions ;
- tableaux ;
- objets ;
- tableaux d'objets ;
- manipulation de chaînes de caractères.

Des méthodes JavaScript peuvent être utilisées, notamment :

- `push()`
- `splice()`
- `find()`
- `findIndex()`
- `includes()`
- `filter()`
- `map()`