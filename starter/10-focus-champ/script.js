/* EXERCICE 10 :
Au focus sur le champ, vide-le et change sa couleur de fond. Lorsqu'on clique en dehors, sa couleur de fond redevient transparente.
- VERSION 1 :
	Ne le fais que pour le champ prénom
- VERSION 2 :
	Fais-le pour le champ prénom et pour le champ nom séparément avec des fonctions différentes
- VERSION 3 :
	Fais-le de manière générique avec une seule fonction qui peut s'adapter au champ sur lequel on l'applique et associe cette fonction à tous les champs texte de la page en parcourant ceux-ci avec une boucle for.
*/


// Un seul champ


//console.log(inputTypeTextBackgroundColorValue);


const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
prenom.addEventListener("focus", function (evt){
evt.currentTarget.style.backgroundColor = "orange";
    couleurBlurPrenom();
});
function couleurBlurPrenom(){
    prenom.addEventListener("blur", function (evt) {
        evt.currentTarget.style.backgroundColor = "transparent";
    });
}


nom.addEventListener("focus", function (evt){
    evt.currentTarget.style.backgroundColor = "orange";
    couleurBlur();
});
function couleurBlur(){
    nom.addEventListener("blur", function (evt) {
        evt.currentTarget.style.backgroundColor = "transparent";
    });
}





/*      RICHTIGE Lösung


const app = {

    textInputsElements: document.querySelectorAll('input[type = text]'),
//titi: this.textInputsElements[0],  // fonctionnera pas !! car objet noch nicht fertig! geht nicht
//document.querySelector('input[type = text]').style.backgroundColor// vaut null marchera pas!!
    formElement : document.querySelector('form'),
sectionElement: document.querySelector(".material"),


    init() {
        this.inputTypeTextBackgroundColorValue = getComputedStyle(document.querySelector("input[type = text]")).backgroundColor;  // va i-ajouter une propriéte à objet, crée cette propriété
        this.addEventListeners();
    },

    addEventListeners() {
        for (const textInputsElement of this.textInputsElements) {
            textInputsElement.addEventListener("focus", (evt) => {
                this.focus(evt);
            });
            textInputsElement.addEventListener('blur', (evt) => {
                this.blur(evt);
            });
        }
        this.formElement.addEventListener('submit', (evt) => {
            this.sayHello(evt);
        })

    },
    focus(evt) {
        // TO DO : remove this
        evt.currentTarget.value = "";
        evt.currentTarget.style.backgroundColor = evt.currentTarget.dataset.backgroundColor;// objet de type element , vaut input
    },
    blur(evt) {
        // TO DO : remove this
        evt.currentTarget.style.backgroundColor = this.inputTypeTextBackgroundColorValue;
    },
    sayHello(evt){
        evt.preventDefault();
        let textContent = 'Bonjour ';
        for (const textInputElement of this.textInputsElements) {
           textContent +=textInputElement.value + ' ';
            //console.log(textInputElement.value);
        }
        this.sectionElement.insertAdjacentHTML('beforeend', `<p>${textContent}</p>`);  // nicht this schreiben eil soll in methode suchen gehen
    }
}
app.init();

*/


// Deux champs


// Plusieurs champs


// evt quand on est dans addeventlistener pour avoir la cible de l'élément qui le recoit


/*. vor structure
const textInputsElements = document.querySelectorAll('input[type = text]');

//document.querySelector('input[type = text]').style.backgroundColor// vaut null marchera pas!!

const inputTypeTextBackgroundColorValue = getComputedStyle(document.querySelector("input[type = text]")).backgroundColor;

console.log(inputTypeTextBackgroundColorValue);

for (const textInputsElement of textInputsElements) {
    textInputsElement.addEventListener("focus", (evt)=>{
        // TO DO : remove this
        evt.currentTarget.value ="";
        evt.currentTarget.style.backgroundColor = evt.currentTarget.dataset.backgroundColor;// objet de type element , vaut input
    });
    textInputsElement.addEventListener('blur',(evt)=>{
        // TO DO : remove this
        evt.currentTarget.style.backgroundColor = inputTypeTextBackgroundColorValue;
    });
}
*/


// NICHT SO SCHREIBEN

/*

prenominputElement.addEventListener("focus", (evt)=>{
    // TO DO : remove this
    evt.currentTarget.value ="";
    evt.currentTarget.style.backgroundColor = 'deepskyblue';
});
prenominputElement.addEventListener('blur',(evt)=>{
    // TO DO : remove this
    evt.currentTarget.style.backgroundColor = 'transparent';
});




nominputElement.addEventListener("focus", (evt)=>{
    // TO DO : remove this
    evt.currentTarget.value= "";
    evt.currentTarget.style.backgroundColor = 'deepskyblue';
});
nominputElement.addEventListener('blur',(evt)=>{
    // TO DO : remove this
    evt.currentTarget.style.backgroundColor = 'transparent';
});

*/