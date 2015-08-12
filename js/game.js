var c=document.getElementById("game");
c.style.background="#000000";
ctx=c.getContext("2d");
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
    controls:{
      left:",",
      right:".",
      jump:"z",
      punch:"x",
      kick:"c",
    },
    pos:{x:(window.innerWidth/4)-testplayer.width,y:window.innerHeight/2},
    jumping:0,
    jumpstep:0,
    punching:0,
    punchstep:0,
    kicking:0,
    kickstep:0
  },
  p2:{
    namev:"Player 2",
    life:100,
    maxlife:100,
    character:null,
    controls:{
      left:null,
      right:null,
      jump:null,
      punch:null,
      kick:null,
    },
    pos:{x:window.innerWidth*3/4,y:window.innerHeight/2},
    jumping:0,
    jumpstep:0,
    punching:0,
    punchstep:0,
    kicking:0,
    kickstep:0
  },
  roundtime:99,
  rounds:{1:0,2:0,3:0},
  chars:{
    test:1
  }
}

function main(){

  document.addEventListener("keydown", processkey, false);
  setInterval(fightloop,50)
}
