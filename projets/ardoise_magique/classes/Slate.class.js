var Slate = function(pen)				//nouvelle classe Slate
{
	this.canvas = document.getElementById('moncanvas');
	this.context = this.canvas.getContext('2d');
	this.currentLocation = null;
	this.isDrawing = false;
	this.pen = pen;
	this.canvas.addEventListener('mousedown',  this.onMouseDown.bind(this));
	this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));
	this.canvas.addEventListener('mousemove',  this.onMouseMove.bind(this));
	this.canvas.addEventListener('mouseup',    this.onMouseUp.bind(this));
};

Slate.prototype.getMouseLocation = function(event)
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

Slate.prototype.onMouseDown = function(event)
{
	this.currentLocation = this.getMouseLocation(event);	 

	this.isDrawing = true;
	
	console.log('mousedown');
	
};


Slate.prototype.onMouseUp = function(event)
{
	this.isDrawing = false;
	console.log('mouseup');
};


Slate.prototype.onMouseMove = function(event)
{
	if(this.isDrawing == true)

	{
	this.context.lineCap = "round";
	this.context.lineJoin = "round";
	this.pen.configure(this.context);
	this.context.beginPath();

	this.context.moveTo(this.currentLocation.x,this.currentLocation.y);
	this.currentLocation = this.getMouseLocation(event);
	this.context.lineTo(this.currentLocation.x,this.currentLocation.y);
	
	this.context.stroke();
	console.log('mousemoveIF');

	}

};


Slate.prototype.onMouseLeave = function()
{
	this.isDrawing = false;
	console.log('mouseleave');
};

Slate.prototype.onClickClear = function(event)
{
	this.context.clearRect(0,0,800,600);
	
};


