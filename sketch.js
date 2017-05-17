var greenV = 1;
var blueV = 1;
var redV = 1;
var OwlMX = 100;
var OwlMY = 100;
var OwlBX = 200;
var OwlBY = 300;
var OwlDX = 600;
var OwlDY = 100;
var OwlTX = 900;
var OwlTY = 120;
var windowhalfH = 2
var windowhalfW = 2
var Liops= 0
var counterL = 0
var counterS = 7
var Bellb
var bell;
counterB = 0
var op1 = 0
var op2 = 0

function preload() {
  OwlMan = loadImage ("assets/owlman.png");
  OwlBoy = loadImage ("assets/owlboy.png");
  OwlDem = loadImage ("assets/owldemon.png");
  OwlThe = loadImage ("assets/theowl.png");
  Lips = loadImage ("assets/lips.png");
  Lip = loadImage ("assets/lip.png");
  Bellb = loadImage ("assets/bellboyboyboy.png");
  Bellr = loadImage ("assets/BellRinging.png");
  Music = loadSound ("assets/GAGAGA.mp3")
  goof = loadSound ("assets/goofo.mp3")
  bell = Bellb
}
function setup() {
  Music.setVolume(0.5)
  createCanvas (windowWidth,windowHeight)
  frameRate (7)
  greenV = random(1,255)
  blueV = random(1,255)
  redV = random(1,255)
  windowhalfH = (windowHeight/2)-20
   windowhalfW = (windowWidth/2)-20
   Liops = Lip
}

function draw() {
  background (redV, blueV, greenV)
  textSize(random(5,145));
  fill (greenV, redV, blueV)
  text ("are you enjoying owls?", 50, random (1,1000));
  textSize(random(20,45));
  fill (redV, redV, redV, op1)
  text ("owls.. owls... owls! with lips!", 800, random (30,40));
  textSize(random(41,58));
  fill (redV, blueV, redV, op2)
  text ("according to all known laws of aviation, there is no way a bee should be able to fly.", 500, random (30,40));
  image(Liops, windowhalfW, windowhalfH)
  greenV = greenV + random(-counterS,counterS)
  blueV = blueV + random(-counterS,counterS)
  redV = redV + random(-counterS,counterS)
  image(OwlMan, OwlMX, OwlMY)
   OwlMX = OwlMX + random(-30,30)
  OwlMY = OwlMY  + random(-30,30)
  if(OwlMX<0){
    OwlMX += 40;
  }
  if(OwlMX>windowWidth){
    OwlMX += 40;
  }
  if(OwlMX<0){
    OwlMX += 40;
  }
  if(OwlMX>windowHeight){
    OwlMX += 40;
  }
  image(OwlBoy, OwlBX, OwlBY)
   OwlBX = OwlBX + random(-25,25)
  OwlBY = OwlBY  + random(-25,25)
  if(OwlBX<0){
    OwlBX += 40;
  }
  if(OwlBX>windowWidth){
    OwlBX += 40;
  }
  if(OwlBX<0){
    OwlBX += 40;
  }
  if(OwlBX>windowHeight){
    OwlBX += 40;
  }
  image(OwlDem, OwlDX, OwlDY)
   OwlDX = OwlDX + random(-35,35)
  OwlDY = OwlDY  + random(-35,35)
  if(OwlDX<0){
    OwlDX += 40;
  }
  if(OwlDX>windowWidth){
    OwlDX += 40;
  }
  if(OwlDX<0){
    OwlDX += 40;
  }
  if(OwlDX>windowHeight){
    OwlDX += 40;
  }
    image(OwlThe, OwlTX, OwlTY)
   OwlTX = OwlTX + random(-35,35)
  OwlTY = OwlTY  + random(-35,35)
  if(OwlTX<0){
    OwlTX += 40;
  }
  if(OwlTX>windowWidth){
    OwlTX -= 40;
  }
  if(OwlTY<0){
    OwlTY += 40;
  }
  if(OwlTX>windowHeight){
    OwlTY -= 40;
  }
     image(bell, 100, 100)
     
}
function mouseClicked(){
  counterS = counterS+1
  Music.play()
  counterL = counterL+1
  if (counterL % 2 == 1){
    Liops=Lips
  } else {
    Liops=Lip
  }
}
function keyPressed() {
  if (keyCode == 71) {
   goof.play()
  }
  if (keyCode == 72) {
    if (counterB % 2 == 1){
      bell = Bellb
      counterB = counterB + 1
    }
    else{
    bell  = Bellr
    counterB = counterB + 1
    }
  } 
  if (keyCode == 74) {
   op1 = 100
  }
  if (keyCode == 75) {
   op2 = 100
  }
  
  function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}
}