/*
EXERCICE 6 : Change couleur (4) - v2
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 2 : une seule fonction qui utilise e.target pour s'adapter au  bouton sur lequel on clique
AJOUT : Quand on clique sur le bouton, la couleur de fond de la page change de manière aléatoire
*/

const boutonsRadio = document.querySelectorAll('input[type = radio]');

for (const boutonsRadioElement of boutonsRadio) {
    boutonsRadioElement.addEventListener('click', function (e) {
        document.body.style.backgroundColor = "rgb((Math.random()*256), (Math.random()*256), (Math.random()*256))";
        //alert(e.target);
        // alert(a.target.value);
        //alert(e.currentTarget);
        //alert(e.currentTarget.value);
    })
}