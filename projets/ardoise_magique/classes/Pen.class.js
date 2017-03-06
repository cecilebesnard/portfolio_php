var Pen = function()			//nouvelle classe Pen
{
	this.color = "black";
	this.size = 2;
};

Pen.prototype.setColorAsRgb = function(red,green,blue)
{
	this.color = 'rgb(' + red + ',' + green + ',' + blue + ')';

};

Pen.prototype.setColor = function(color)
{
	this.color = color;

};


Pen.prototype.setSize = function(size)
{
	this.size = size;
};

Pen.prototype.configure = function(context) 
{
	context.strokeStyle = this.color;
	context.lineWidth = this.size;

};