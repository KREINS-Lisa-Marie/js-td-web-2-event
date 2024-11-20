/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/


//MEIN CODE
const boutonsRadio = document.querySelectorAll('input[type = radio]');

for (const boutonsRadioElement of boutonsRadio) {
    boutonsRadioElement.addEventListener('click', function (e) {
        document.body.style.backgroundColor = boutonsRadioElement.value;
        //alert(e.target);
       // alert(a.target.value);
        //alert(e.currentTarget);
        //alert(e.currentTarget.value);
    })
}
// BIS HIER




// 1 ere méthode
document.querySelector('root').style.setProperty('--main-color', document.querySelector('input[checked]').value);

/*
document.getElementById('rouge').addEventListener('change', function (evt) {
//    console.log('bonjour')
 //   document.querySelector('root').style.setProperty('--main-color', 'this.value')  // fonctionne ≠ avec arrow function
    document.querySelector('root').style.setProperty('--main-color', evt.currentTarget.value); // current target= input

});
*/



const radioInputs = document.querySelectorAll('input[type = radio]');  // = iterable , peut parcourir



/*
// peut éviter de faire ça avec code tout au début
for (const radioInput of radioInputs) {
    if (radioInput.checked){
        document.querySelector('root').style.setProperty('--main-color', radioInput.value);
    }
}
*/






const radioButtons = document.querySelectorAll('input [type = radio]');

for (const radioButton of radioButtons) {
    radioButton.addEventListener('change', function (evt) {           // permet renregistrer code
        document.querySelector('root').style.setProperty('--main-color', evt.currentTarget.value);
    });
}

/* remplacé par code avant
document.getElementById('rouge').addEventListener('change' changeCouleur);
document.getElementById('vert').addEventListener('change' changeCouleur);
document.getElementById('bleu').addEventListener('change' changeCouleur);
document.getElementById('jaune').addEventListener('change' changeCouleur);
*/


document.getElementById('formCouleur').addEventListener('submit', function (evt) {
   evt.preventDefault(); // évite conporetement par défaut --> ici  recharger console
    console.log('Bonjour');
}); // fonction de callback en 2eme param






















/*
    document.getElementById('vert').addEventListener('change', function (evt) {
        document.querySelector('root').style.setProperty('--main-color', evt.currentTarget.value);

        document.getElementById('bleu').addEventListener('change', function (evt) {
            document.querySelector('root').style.setProperty('--main-color', evt.currentTarget.value);

            document.getElementById('jaune').addEventListener('change', function (evt) {
                document.querySelector('root').style.setProperty('--main-color', evt.currentTarget.value);

*/