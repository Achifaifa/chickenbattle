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

  // Draw rounds
  ctx.fillText(world.rounds[0]+" "+world.rounds[1]+" "+world.rounds[2],middle-22,20)

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

function restart(){

  world.p1.life=world.p1.maxlife
  world.p2.life=world.p2.maxlife
  world.currentround++
  world.p1.pos={x:(window.innerWidth/4)-testplayer.width,y:window.innerHeight/2}
  world.p2.pos={x:window.innerWidth*3/4,y:window.innerHeight/2}
  world.p1.jumping=0;
  world.p1.jumpstep=0;
  world.p1.punching=0;
  world.p1.punchstep=0;
  world.p1.kicking=0;
  world.p1.kickstep=0;
  world.p2.jumping=0;
  world.p2.jumpstep=0;
  world.p2.punching=0;
  world.p2.punchstep=0;
  world.p2.kicking=0;
  world.p2.kickstep=0;

}

function maintainedkeys(){

  if (world.p1.pkeys.left==1){world.p1.pos.x-=10}
  if (world.p1.pkeys.right==1){world.p1.pos.x+=10} 
  if (world.p1.pkeys.jump==1 && world.p1.jumping==0){world.p1.jumping=1}
  if (world.p1.pkeys.punch && world.p2.life>0 && world.p1.punching==0){
    world.p1.punching=1
    if (Math.abs(world.p1.pos.x-world.p2.pos.x)<150){
      world.p2.life-=5
      if (world.p2.life<=0){
        world.p2.life=0
        world.rounds[world.currentround]="1"
        restart()
      }
    }
  }
  if (world.p1.pkeys.kick==1 && world.p2.life>0 && world.p1.kicking==0){
    world.p1.kicking=1
    if (Math.abs(world.p1.pos.x-world.p2.pos.x)<150){
      world.p2.life-=10
      if (world.p2.life<=0){
        world.p2.life=0
        world.rounds[world.currentround]="1"
        restart()
      }
    }
  }
}

function processkeydown(ev){

  switch (ev.key){
  case world.p1.controls.left: 
    world.p1.pkeys.left=1
    break;
  case world.p1.controls.right: 
    world.p1.pkeys.right=1
    break;
  case world.p1.controls.jump:
    world.p1.pkeys.jump=1
    break;
  case world.p1.controls.punch:
    world.p1.pkeys.punch=1
    break;
  case world.p1.controls.kick:
    world.p1.pkeys.kick=1
    break;
  }
}

function processkeyup(ev){
  
  switch (ev.key){
  case world.p1.controls.left: 
    world.p1.pkeys.left=0
    break;
  case world.p1.controls.right: 
    world.p1.pkeys.right=0
    break;
  case world.p1.controls.jump:
    world.p1.pkeys.jump=0
    break;
  case world.p1.controls.punch:
    world.p1.pkeys.punch=0
    break;
  case world.p1.controls.kick:
    world.p1.pkeys.kick=0
    break;
  }
}

function fightloop(){

  if (world.fighting==1){
    maintainedkeys()
    updateworld()
  }
  render()
}
