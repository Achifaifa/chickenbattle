fightbg=new Image()
fightbg.src="./img/fight_background.jpg"
testplayer=new Image()
testplayer.src="./img/test-sprite.png"


function background(ctx){
  ctx.fillStyle=ctx.createPattern(fightbg, 'repeat');
  // ctx.image(fightbg,0,0)
  ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
  ctx.fillStyle="#AAAAAA"
}

function gui(ctx,w){
  /*
  Draws the combat layout (Health bars, timer, etc)

  Timer: Double digits 150x150px in the middle
  Health: 30px height, 20px vert margin, 50px hor margin
  */

  // Calculate reference points
  var middle=window.innerWidth/2

  // Draw time counter
  var timeleft=('00'+w.roundtime).slice(-2);
  ctx.font="60px sans-serif";
  ctx.fillText(timeleft,middle-39,75)

  // Draw life bars
  var perc1=(w.p1.life*100)/w.p1.maxlife
  var perc2=(w.p2.life*100)/w.p2.maxlife
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
  ctx.fillText(w.p1.namev,60,100)
  ctx.fillText(w.p2.namev,window.innerWidth-60-(w.p2.namev.length*15),100)
  ctx.font="15px sans-serif";

  ctx.stroke()
}

function drawchars(ctx,w){

  ctx.drawImage(testplayer,w.p1.pos.x,w.p1.pos.y)
  ctx.drawImage(testplayer,w.p2.pos.x,w.p2.pos.y)
}

function fight(ctx,w){

  background(ctx);
  drawchars(ctx,w);
  gui(ctx,w)

}
