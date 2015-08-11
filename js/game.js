var c=document.getElementById("game");
c.style.background="#000000";
var ctx=c.getContext("2d");
ctx.canvas.width=window.innerWidth;
ctx.canvas.height=window.innerHeight;
ctx.fillStyle="white"
ctx.strokeStyle="white"
ctx.font="15px sans-serif";

world={
  p1:{
    namev:"Player 1",
    life:100,
    maxlife:100,
    character:null,
  },
  p2:{
    namev:"Player 2",
    life:100,
    maxlife:100,
    character:null,
  },
  roundtime:99,
  rounds:{1:0,2:0,3:0}
}

function main()
{
  fight(ctx,world)
}

