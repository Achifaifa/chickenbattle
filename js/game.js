var c=document.getElementById("game");
c.style.background="#000000";
var ctx=c.getContext("2d");
ctx.canvas.width=window.innerWidth;
ctx.canvas.height=window.innerHeight;
ctx.fillStyle="white"
ctx.font="15px sans-serif";

function main()
{
	mainMenu();
}
world={
  p1={
    name=null
    life=0-1
    maxlife=0-1
    character=null
  }
  p2={
    name=null
    life=-1
    maxlife=-1
    character=null
  }
}
gui(ctx,world)
