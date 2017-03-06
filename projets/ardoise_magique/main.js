//dessin des epaisseurs de trait

function epaisseur(id, lineWidth)
{
	var c = document.getElementById(id);
	var ctx = c.getContext('2d');
	ctx.beginPath();
	ctx.moveTo(5,38);
	ctx.lineTo(38,5);
	ctx.strokeStyle = "black";
	ctx.lineWidth = lineWidth;
	ctx.stroke();
}

epaisseur("fin", 2);
epaisseur("moyen", 5);
epaisseur("gros", 10);



// **********************************************************************************
// ********************************* Code Principal *********************************
// **********************************************************************************

/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera
 * totalement construit par le navigateur.
 *
 * Le gestionnaire d'évènement est une fonction anonyme que l'on donne directement à jQuery.
 */
$(function()
{
	var magicalSlate;
	
	// Création puis démarrage de l'application.
    magicalSlate = new Program();
	
	magicalSlate.start();
	
});