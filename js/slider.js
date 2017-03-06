'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var slides = new Array();
slides = 
[
	{
		image : 'images/diplome.png',
		texte : 'BTS GESTION ET MERCATIQUE HOTELLIERE',
		date : '2003'
	},

	{
		image : 'images/receptionniste.jpg',
		texte : '1er EMPLOI dans l\'hotellerie : RECEPTIONNISTE',
		date : '2004'
	},

		
	{
		image : 'images/manager.jpg',
		texte : 'On continue dans l\'hotellerie mais je prends du galon : Chef de réception',
		date : '2005'
	},


	{
		image : 'images/PC.jpg',
		texte : 'L\'heure du changement : me voilà démarrant un nouveau metier, presque par hasard : TECHNICIEN SUPPORT pour les metiers de l\'hotellerie et de la restauration.</p><p>Mais quésako ?</p><p>je suis là pour aider les utilisateurs de nos logiciels, servant exclusivement en restauraton, vous savez les petits ecrans pleins de couleurs qu\'utilisent les serveurs quand vous allez au restaurant. Ou encore pour les hotelliers.</p><p>En quelque sorte un technicien support est un sauveur !! oui oui un sauveur, surtout en plein services avec tous les clients autour du pauvre serveur qui n\'arrive pas à saisir sa note !',
		date : '2006'
	},

	{
		image : 'images/site-internet.jpg',
		texte : 'Et là, PAF c\'est le drame ! Non pas completement, je m\'explique:</p><p>Licenciement économique....horreur, malheurs !!</p><p>Et bien NON ! Il s\'agit plutot d\'une renaissance professionelle, je vais me rapprocher un peu plus de ce que j\'aime. Non pas que je n\'appreciais pas mon précèdent metier mais à partir de maintenant on va CREER !!!</p><p>Me voilà donc partie avec mes petits cahiers et mes crayons de couleurs : FORMATION DEVELOPPEUR ET INTEGRATEUR WEB !',
		date : '2016'
	},

	{
		image : 'images/logo_formation.jpg',
		texte : 'Et histoire de se perfectionner, on continue avec la formation sur le framework PHP : SYMFONY.</p><p>Et pour donner bonne "image" (jeu de mots, merci merci), je fignole avec une formation PHOTOSHOP',
		date : '2017'
	}

];

var state =
{
	index : 0,
	
};

var next = document.getElementById('next');
var previous = document.getElementById('previous');


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function initialize()
{
	
	var image = document.getElementById('image');
	image.setAttribute('src', slides[0].image);
	var texte = document.getElementById('texteParcours');
	texte.innerHTML = slides[0].texte;
	var date = document.getElementById('date');
	date.textContent = slides[0].date;

}

function refresh()
{
	var image = document.getElementById('image');
	image.setAttribute('src', slides[state.index].image);
	var texte = document.getElementById('texteParcours');
	texte.innerHTML = slides[state.index].texte;
	var date = document.getElementById('date');
	date.textContent = slides[state.index].date;

}


function OnClickNext()

{
	

				if (state.index < 5)
			{
				state.index++;
				refresh();
				console.log(state.index);
			} 

			else
			{
				state.index -= 5;
				refresh();
				console.log(state.index);
			}	
	
}

function OnClickPrevious()

{
	

				if (state.index > 0)
			{
				state.index--;
				refresh();
				console.log(state.index);
			} 

			else
			{
				state.index += 5;
				refresh();
				console.log(state.index);
			}	
	
}





