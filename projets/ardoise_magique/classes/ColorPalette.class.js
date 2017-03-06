var ColorPalette = function()
{
	this.canvas = document.getElementById('palette');
	this.context = this.canvas.getContext('2d');
	this.GradientColor();
	this.currentLocation = null;
	this.canvas.addEventListener('mousedown' , this.onClickPalette.bind(this));
	this.pickedColor = 
	{
		red : 0,
		green : 0,
		blue : 0
	};
	
};

ColorPalette.prototype.GradientColor = function()
{
	var gradient = this.context.createLinearGradient(0,0,256,0);
	gradient.addColorStop(0, 	"rgb(255,0	,	0)");
	gradient.addColorStop(0.18, "rgb(255,255,	0)");
	gradient.addColorStop(0.30, "rgb(0,	 255,	0)");
	gradient.addColorStop(0.47, "rgb(0,	 255, 255)");
	gradient.addColorStop(0.62, "rgb(0,	 0	, 255)");
	gradient.addColorStop(0.83, "rgb(255,0	, 255)");
	gradient.addColorStop(1, 	"rgb(255,0	,	0)");
	this.context.fillStyle = gradient;
	this.context.fillRect(0,0,256,256);

	var gradient2 = this.context.createLinearGradient(0,0,0,256);
	gradient2.addColorStop(0, "rgba(255,255,255,1)");
	gradient2.addColorStop(0.5, "rgba(255,255,255,0)");
	gradient2.addColorStop(0.5, "rgba(0,0,0,0)");
	gradient2.addColorStop(1, "rgba(0,0,0,1)");
	this.context.fillStyle = gradient2;
	this.context.fillRect(0,0,256,256);
	

};

ColorPalette.prototype.getMouseLocation = function(event)
{
	var rect = this.canvas.getBoundingClientRect(); 
	var borderLeft = window.getComputedStyle(this.canvas,null).getPropertyValue("border-left-width");
	var borderTop = window.getComputedStyle(this.canvas,null).getPropertyValue("border-top-width");
	borderLeft = parseInt(borderLeft);
	borderTop = parseInt(borderTop);
	var coords = 
	{
		x : event.clientX - rect.left - borderLeft,
		y : event.clientY - rect.top - borderTop
	};
	
	
	console.log(coords);
	return coords;
};


ColorPalette.prototype.onClickPalette = function(event)
{
	this.currentLocation = this.getMouseLocation(event);
	var color = this.context.getImageData(this.currentLocation.x, this.currentLocation.y, 1, 1).data;
	console.log(color);
	$('#palette').hide();
	this.pickedColor.red = color[0];
	this.pickedColor.green = color[1];
	this.pickedColor.blue = color[2];

	//methode .trigger() genere un event artificiellement sur l'objet $
	$.event.trigger('magical-slate:pick-color');
 
	console.log('onClickPalette');
};

ColorPalette.prototype.getPickedColor = function()
{
    return this.pickedColor;
};
