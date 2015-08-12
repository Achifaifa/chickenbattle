fightbg=new Image()
fightbg.src="./img/fight_background.jpg"
testplayer=new Image()
testplayer.src="./img/test-sprite.png"


function background(){

  ctx.fillStyle=ctx.createPattern(fightbg, 'repeat');
  // ctx.image(fightbg,0,0)
  ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
  ctx.fillStyle="#AAAAAA"
}

function gui(){
  /*
  Draws the combat layout (Health bars, timer, etc)

  Timer: Double digits 150x150px in the middle
  Health: 30px height, 20px vert margin, 50px hor margin
  */

  // Calculate reference points
  var middle=window.innerWidth/2

  // Draw time counter
  var timeleft=('00'+world.roundtime).slice(-2);
  ctx.font="60px sans-serif";
  ctx.fillText(timeleft,middle-39,75)

  // Draw life bars
  var perc1=(world.p1.life*100)/world.p1.maxlife
  var perc2=(world.p2.life*100)/world.p2.maxlife
  ctx.rect(50,20,middle-100,50)
  ctx.rect(window.innerWidth-50,20,-middle+100,50)
  ctx.stroke()
  ctx.fillStyle="#FF0000"
  ctx.fillRect(49,21,middle-98,48)
  ctx.fillRect(window.innerWidth-49,21,-middle+98,48)
  ctx.stroke()
  ctx.fillStyle="#00FF00"
  ctx.fillRect(middle-50,21,(-middle+100)*perc1/100,48)
  ctx.fillRect(middle+50,21,(middle-100)*perc2/100,48)
  ctx.stroke()
  ctx.fillStyle="#AAAAAA"

  // Draw names
  ctx.font="30px sans-serif";
  ctx.fillText(world.p1.namev,60,100)
  ctx.fillText(world.p2.namev,window.innerWidth-60-(world.p2.namev.length*15),100)
  ctx.font="15px sans-serif";

  }

function drawchars(){

  ctx.drawImage(testplayer,world.p1.pos.x,world.p1.pos.y)
  ctx.drawImage(testplayer,world.p2.pos.x,world.p2.pos.y)
}

function draweffects(){

  if (world.p1.punching==1){ctx.fillText("POW!",world.p1.pos.x,world.p1.pos.y)}
  if (world.p1.kicking==1){ctx.fillText("THUD!",world.p1.pos.x,world.p1.pos.y)}
  if (world.p1.jumping==1){ctx.fillText("*jump*",world.p1.pos.x,world.p1.pos.y)}

}

function render(){

  background();
  drawchars();
  draweffects();
  gui();
  ctx.stroke()
}

function updateworld(){

  if (world.p1.jumping==1){world.p1.jumpstep++}
  if (world.p1.punching==1){world.p1.punchstep++}
  if (world.p1.kicking==1){world.p1.kickstep++}
  if (world.p1.jumpstep>5){world.p1.jumpstep=0; world.p1.jumping=0}
  if (world.p1.punchstep>5){world.p1.punchstep=0; world.p1.punching=0}
  if (world.p1.kickstep>5){world.p1.kickstep=0; world.p1.kicking=0}
}

function processkey(ev){

  switch (ev.key){
  case world.p1.controls.left: 
    world.p1.pos.x-=10
    break;
  case world.p1.controls.right: 
    world.p1.pos.x+=10
    break;
  case world.p1.controls.jump:
    world.p1.jumping=1
    break;
  case world.p1.controls.punch:
    if (world.p2.life>0 && world.p1.punching==0){
      world.p1.punching=1
      if (Math.abs(world.p1.pos.x-world.p2.pos.x)<150){
        world.p2.life-=5
      }
    }
    break;
  case world.p1.controls.kick:
    if (world.p2.life>0 && world.p1.kicking==0){
      world.p1.kicking=1
      if (Math.abs(world.p1.pos.x-world.p2.pos.x)<150){
        world.p2.life-=10
      }
    }
    break;
  }
}

function fightloop(){

  updateworld()
  render()
}
