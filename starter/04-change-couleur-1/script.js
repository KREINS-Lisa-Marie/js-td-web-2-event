/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/

const boutons = document.getElementsByTagName("button");


for (const bouton of boutons) {
    bouton.addEventListener('click', function (){
        document.body.style.backgroundColor = bouton.id;
    })
}




