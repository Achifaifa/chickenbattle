function mainMenu()
{
	var fondo = new Image();
	fondo.src = 'img/fondo.jpg';
	fondo.onload = function()
	{
		ctx.drawImage(fondo,0,0,800,600);
	}
}
