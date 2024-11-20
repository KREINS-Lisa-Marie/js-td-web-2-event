/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 9 : 
Au clic sur le bouton, change la source de l'image par celle de l'image suivante dans le tableau <strong>gallery</strong>. Fais-en une boucle.
*/
/* 
AIDE : voici les étapes :
1. On initialise un index
2. On recherche l'élément img
3. On associe image aux éléments du tableau (suivant le numéro d'index)
4. On incrémente l'index de 1 pour faire défiler les images
5. En fin de longueur du tableau, on redémarre au début de l'index
*/





(
   () => {
    const caroussel ={
        imagesIndex : 0,
        imageSources : ['./img/becode-seal.png', './img/bell.svg', './img/clock.svg', './img/compass.svg', './img/kiss.svg', './img/kiss-wink-heart.svg', './img/lemon.svg', './img/map.svg'],
        imageElement : document.querySelector('img'),
        boutonElement : document.getElementById("next"),

        init() {
            this.boutonElement.addEventListener('click', ()=>{
                //const source =  this.imageSources[this.imagesIndex];
                this.changeImage();
            });
        },
        changeImage(){
            this.imagesIndex++
            if (this.imagesIndex === this.imageSources.length){
                this.imagesIndex= 0;
            }else{
                this.imageElement.src= this.imageSources[this.imagesIndex];
            }
        }
    }
    caroussel.init();
}
)()










/*
let image = document.getElementsByTagName("img");
const bouton = document.getElementById("next");

bouton.addEventListener('click', function () {
    for (const tableauImage of tableauImages) {
        image = tableauImage.src;
    }
})

*/



/*.  Lösung schule






(
    function () {
        const caroussel = {
            currentImageIndex: 0,   // index courant des images
            imageSources: ['./img/becode-seal.png', './img/bell.svg', './img/clock.svg', './img/compass.svg', './img/kiss.svg', './img/kiss-wink-heart.svg', './img/lemon.svg', './img/map.svg'],
            imageElement: document.querySelector('img'),
// imageElement.src = imageSources[currentImageIndex];  // fonctionne pas
            buttonElement: document.getElementById('next'),
            init() {
                this.buttonElement.addEventListener('click', ()=>{
                    console.log(this);
                    this.changeSrc();
                });
            },
            changeSrc() {  // muss nicht evt weil nichts mit Button passiert
                this.currentImageIndex++;
                console.log(this);
                if (this.currentImageIndex === this.imageSources.length) {
                    this.currentImageIndex = 0;
                }
                this.imageElement.src = this.imageSources[this.currentImageIndex];  // fonctionne pas
            }
        }

        caroussel.init();


        // window.toto = ""   pour faire variable globale qui peut appeler partout
    }
)()


// forcer binding avec  this.changeSrc.bind(this)
// ou arrow function pour eviter binding par navigateur



 */