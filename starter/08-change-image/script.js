/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 8 :
Au clic sur l'image, change sa source par celle qui se trouve dans son attribut "data-hover".
BONUS : switche entre les deux images : quand on re-clique, tu reviens à l'image originale et ainsi de suite
*/
/* 
AIDE POUR LE BONUS :
Pour réaliser cet effet, il suffit d'échanger le contenu des deux propriétés src et dataset.hover :
	* au clic 1, on met l'image de data.hover dans src et celle de src dans data.hover => dans src, il y a à présent la nouvelle (on affiche donc bien la nouvelle) et maintenant, dans data.hover, il a l'ancienne
	* au clic 2, on met l'image de data.hover (qui contient à présent l'ancienne) dans src et celle de src (qui contient l'ancienne) dans data.hover => dans src, il y a à présent à nouveau l'ancienne (on réaffiche l'ancienne) et maintenant, dans data.hover, il a la nouvelle
	* etc., ainsi de suite
*/
/*
Parenthèse : comment échanger le contenu de 2 variables ?
La méthode classique est de créer une variable temporaire, comme ceci : 
	var a, b, t;
	a = 2;
	b = 3;
	t = a;
	a = b;
	b = t;
	console.log(`a vaut ${a} et b vaut ${b}`);
*/



// version de base

// Meine Lösung TEST


let source = document.querySelector('img');
console.log(source);
let hover = document.querySelector('img').dataset.hover;
console.log(hover);
document.querySelector('img').addEventListener('click', function (evt){
    if (document.querySelector('img').src === source){
        console.log(evt.currentTarget);
        [source.src, hover] = [hover, source.src];
    }else {
        [hover, source.src] = [source.src, hover];
    }
})







/*        --------------  premiere Solution du cours  -----------

const imageElement = document.querySelector("img");     // objet de type element   = image
                        // objet a proprietes et methodes
const src = imageElement.src;               // valeur recupere quand page chargé
const dataHover = imageElement.dataset.hover;


imageElement.addEventListener("click", function (evt) {
    console.log(evt);   // quand click affiche dans la console ou on a clické et  autres infos  (currentTarget   impt  = cible de l'évenement)

    if (evt.currentTarget.src === src ){
        evt.currentTarget.src = dataHover;   // = image qui vient d'etre clické
    } else {
        evt.currentTarget.src = src;
    }

});


// type et ref de fonction (nom fonction)
// déclaration de fonction vaut ....?
// fonction peut prendre param (= evenement = evt)
// mouseevent = objet


*/




// -------NEUE Lösung Unterricht


/*
document.querySelector('img').addEventListener('click', function (e) {
    [
        e.currentTarget.src,
        e.currentTarget.dataset.hover
    ]=[
        e.currentTarget.dataset.hover,
        e.currentTarget.src
    ]
})



*/






// BONUS : switch entre les deux images
