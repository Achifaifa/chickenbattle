subimgx=0;
subimgy=0;
subimgancho=0;
subimgalto=0;
cont=0;
menuid=0;

function mainMenu()
{
	drawBack();
	drawSubtitle();

	subtitleLoop();
}

function drawBack()
{
	var fondo = new Image();
	fondo.src = 'img/fondo.jpg';
	
	fondo_imgancho=ctx.canvas.width;
	fondo_imgalto=(fondo_imgancho*720)/1280;
	fondo_imgx=0;

	if(ctx.canvas.height<fondo_imgalto)
	{
		fondo_imgy=-(fondo_imgalto-ctx.canvas.height)/2;
	}
	else if(ctx.canvas.height>fondo_imgalto)
	{
		fondo_imgy=(ctx.canvas.height-fondo_imgalto)/2;
	}
	else
	{
		fondo_imgy=0;
	}

	fondo.onload = function()
	{
		ctx.drawImage(fondo,fondo_imgx,fondo_imgy,fondo_imgancho,fondo_imgalto);
	}

	var title = new Image();
	title.src= 'img/title.png';

	title_imgancho=ctx.canvas.width/3;
	title_imgalto=(title_imgancho*130)/576;

	title_imgx=ctx.canvas.width/3;
	title_imgy=fondo_imgy+fondo_imgalto/6;

	title.onload = function()
	{
		ctx.drawImage(title,title_imgx,title_imgy,title_imgancho,title_imgalto);
	}

	if(cont==0)
	{
		subimgancho=ctx.canvas.width/3;
		subimgalto=(subimgancho*130)/576;

		subimgx=ctx.canvas.width/3;
		subimgy=fondo_imgalto-fondo_imgalto/6;
	}
}

function drawSubtitle()
{
	var subtitle = new Image();
	subtitle.src = 'img/subtitle.png';

	subtitle.onload = function()
	{
		ctx.drawImage(subtitle,subimgx,subimgy,subimgancho,subimgalto);
	}
}

function subtitleLoop()
{
	cont++;
	subimgx-=(Math.cos(cont*0.025));
	subimgancho+=(Math.cos(cont*0.05));

	drawBack();
	drawSubtitle();

	if(menuid==0)
	{
		setTimeout(subtitleLoop, 50);
	}
}

function drawSelBack()
{
	var back = new Image();
	back.src = 'img/fondosel.jpg';

	back.onload = function()
	{
		ctx.drawImage(back,0,0,ctx.canvas.width,ctx.canvas.height);
	}
}

function selMenu()
{
	menuid=1;
	drawSelBack();
	selMenuLoop();
}

function selMenuLoop()
{
	drawSelBack();
	if(menuid==1)
	{
		setTimeout(selMenuLoop, 50);
	}
}
