var Program = function()			//nouvelle classe Program
{
	this.pen = new Pen();
	this.slate = new Slate(this.pen);
	this.colorPalette = new ColorPalette();
};

//gestionnaire d'evenement

Program.prototype.onClickColor = function(event)
{
	var div;
	div = event.currentTarget;
	var penColor = div.dataset.color;
	this.pen.setColor(penColor);
	console.log(penColor);
	
};


Program.prototype.onClickSize = function(event)
{
	var button;
    var penSize;

    // Récupération du <button> qui a déclenché l'évènement.
    button = event.currentTarget;

    // Récupération de l'attribut HTML5 data-size.
    penSize = button.dataset.size;   // Avec jQuery cela donnerait $(button).data('size')

    // Modification de l'épaisseur du crayon.
    this.pen.setSize(penSize);
    console.log(penSize);
};

Program.prototype.onClickPipette = function(event)
{
	$('#palette').fadeIn('slow');
}

Program.prototype.onPickColor = function()
{
	var color;
	
	color = this.colorPalette.getPickedColor();

	this.pen.setColorAsRgb(color.red,color.green,color.blue);

};

 //installation du gestionnaire d'evenement sur les boutons couleur et taille
 	//on ne peut pas appeler la methode .onClickColor()/.onClickSize seule comme une fonction standard, 
 	//cela n'a de sens que sur un objet de la class Program
 	//il faut l'appliquer à un objet (ici this soit l'objet courant qui a declanché l'evenement)
 	// .bind() se substitue au this du bouton pr le remplacer par le this de la methode onClickColor
Program.prototype.start = function()
{
	$('.color').on('click' , this.onClickColor.bind(this));
	$('.size').on('click' , this.onClickSize.bind(this));
	$('#gomme').on('click', this.slate.onClickClear.bind(this.slate));
	$('#pipette').on('click' , this.onClickPipette.bind(this));
	$(document).on('magical-slate:pick-color' , this.onPickColor.bind(this));
};
