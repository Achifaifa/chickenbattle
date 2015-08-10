function mainMenu()
{
	var fondo = new Image();
	fondo.src = 'img/fondo.jpg';
	
	imgancho=ctx.canvas.width;
	imgalto=(imgancho*720)/1280;
	imgx=0;
	imgy=-imgalto/2;

	fondo.onload = function()
	{
		ctx.drawImage(fondo,0,-imgalto/4,imgancho,imgalto);
	}
}
