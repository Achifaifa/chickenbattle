function mainMenu()
{
	var fondo = new Image();
	fondo.src = 'img/fondo.jpg';
	
	imgancho=ctx.canvas.width;
	imgalto=(imgancho*720)/1280;
	imgx=0;

	if(ctx.canvas.height<imgalto)
	{
		imgy=-(imgalto-ctx.canvas.height)/2;
	}
	else if(ctx.canvas.height>imgalto)
	{
		imgy=imgalto/4;
	}
	else
	{
		imgy=0;
	}
	console.log(ctx.canvas.height+" "+imgalto+" "+imgy);

	fondo.onload = function()
	{
		ctx.drawImage(fondo,0,imgy,imgancho,imgalto);
	}
}
