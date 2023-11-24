const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let positionActuelSlides = 0;
let itemLog;

caroussel(positionActuelSlides);
creationPoint();
pointActif();

///////////////////////////////////////////////////////////////////////////////////////
//on cible la fleche gauche
const flecheGauche = document.querySelector(".arrow_left");
//on écoute la fleche
flecheGauche.addEventListener("click", () => {
	//on décamerre une boucle en fonction de la position de l'index du tableau slide
	if (positionActuelSlides == 0 ) {
		// si position zero(donc début du tableau) on va a la fin du tableau avec - 1
		positionActuelSlides = slides.length - 1;
	}
	else {
		// sinon on retire une unité avec --
		positionActuelSlides--;
	}
	// mise a jour de la position du caroussel 
	caroussel(positionActuelSlides);
});

//on cible la fleche droite 
const flecheDroite = document.querySelector(".arrow_right");
//on écoute la fleche 
flecheDroite.addEventListener("click", () => {
	//on décamerre une boucle en fonction de la position de l'index du tableau slide 
	if (positionActuelSlides == slides.length - 1) {
		//si position fin du tableau, on retourne au début  
		positionActuelSlides = 0;
	}
	else {
		// sinon on ajoute une unité avec ++ 
		positionActuelSlides++;
	}
	// mise a jour de la position du caroussel 
	caroussel(positionActuelSlides);
});


///////////////////////////////////////////////////////////////////////////////////////
//fonction de création des points pour chaques img de slides 
function creationPoint() {	
	//on cible l'element qui va recevoir les points 
	const conteneurPoint = document.querySelector(".dots");
	//on parcour le tableau slides 
	for (let i = 0; i < slides.length; i++) {
		//on crée un point pour chaque itération du tableau 
		const nouveauPoint = document.createElement("div");
		// on inject le point dans la cible de réception 
		conteneurPoint.appendChild(nouveauPoint);
		// on ajoute la class css au point crée 
		nouveauPoint.classList.add("dot");
	}
};


///////////////////////////////////////////////////////////////////////////////////////
//fonction de création du point actif  
function pointActif() {
	//on cible l'ensemble des point 
	const ensembleDesPoints = document.querySelectorAll(".dot");
	//on parcour le tableau crée par les nouveau point 
	for (let i = 0; i < ensembleDesPoints.length; i++) {
		//on démarre une boucle de condition 
		if (i == positionActuelSlides) {
			// on détermine la position et on ajoute la class css des point actif 
			ensembleDesPoints[i].classList.add("dot_selected");
		}
		else {
			// si la condition est fausse, on retire la class css des point actif 
			ensembleDesPoints[i].classList.remove("dot_selected");
		}
	}
};


///////////////////////////////////////////////////////////////////////////////////////
// fonction modification de l'affichage du caroussel 
function caroussel(positionActuelSlides) {
	//on cible l'index position du tableau slide 
	const item = slides[positionActuelSlides];

	//on cible l'image de la bannière 
	const bannerImg = document.querySelector(".banner-img");
	//on modifie le liens de l'image de la bannière 
	bannerImg.setAttribute("src" , "./assets/images/slideshow/"+ item.image);

	//on cible le texte de la bannière 
	const txt = document.querySelector(".banner-txt");
	//on modifie le texte de la bannière 
	txt.innerHTML = item.tagLine;
	// on met a jour le point actif 
	pointActif();

	//on donne une valeur a itemLog pour le console log final
	itemLog = item;
	//on appelle la function consoleLog
	consoleLog();
};


///////////////////////////////////////////////////////////////////////
// Console Log finale (bonus)
function consoleLog() {
	//on définit le message d'affichage pour l'itération en cours
	let affichageIteration = ("L'itération actuel du tableau slide est: ");
	//on luit ajoute la valeur définit par la position actuel de l'index slide
	affichageIteration += positionActuelSlides;

	//on définit le message pour l'affichage de l'image en cours
	let affichageImg = (", l'image afficher est: ");
	//on luit ajoute la valeur image de l'itération actuellement afficher
	affichageImg += itemLog.image;

	//on définit le message pour l'affichage du texte
	let affichageTxt = (", le text afficher est: ");
	//on lui ajoute la valeur tagLine de l'itération actuellement afficher
	affichageTxt += itemLog.tagLine;

	//on construit le message log en commencant par l'affichage de l'itératino en cours, puis l'image et enfin le text
	let affichageMessageLog = affichageIteration + affichageImg + affichageTxt;

	//on affiche le message dans la console
	console.log(affichageMessageLog);
};