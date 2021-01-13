var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0  

  redB = createGroup();
  arrowG = createGroup();
  blueB = createGroup();
  greenB = createGroup();
  pinkB = createGroup();
}

function draw() {

  
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
 
  //moving bow
  bow.y = World.mouseY
  
  
  if (keyDown("space") ){
   createArrow();
  
  } 
  
createRed_balloon();

  
 if(arrowG.isTouching(redB)){
  arrowG.destroyEach();
  redB.destroyEach() ;
  score  = score + 1;  
 } 
  
if(arrowG.isTouching(pinkB)){
  arrowG.destroyEach();
  pinkB.destroyEach() ;
  score  = score + 1;  
 }  
  
 if(arrowG.isTouching(greenB)){
  arrowG.destroyEach();
  greenB.destroyEach() ;
  score  = score + 1;  
 }   
  
  
  
  
  
  
  
createBlue_balloon();
  
createPink_balloon();
  
createGreen_balloon();

drawSprites();
   text("Score: "+ score, 500,50);
}

  
function createRed_balloon(){
  if(frameCount % 60 === 0){
    red_balloon =createSprite(0,100)
    red_balloon.y= Math.round(random(30,400));
    red_balloon.addImage(red_balloonImage);
    red_balloon.scale= 0.1;
    red_balloon.velocityX= 4;
    redB.add(red_balloon);
  }
}

function createBlue_balloon(){
  if(frameCount % 50 === 0){
    blue_balloon =createSprite(0,100)
    blue_balloon.y= Math.round(random(35,400));
    blue_balloon.addImage(blue_balloonImage);
    blue_balloon.scale= 0.1;
    blue_balloon.velocityX= 5;
    blueB.add(blue_balloon);
  }
}

function createPink_balloon(){
  if(frameCount % 40 === 0){
    pink_balloon =createSprite(0,100)
    pink_balloon.y= Math.round(random(41,400));
    pink_balloon.addImage(pink_balloonImage);
    pink_balloon.scale= 1.5;
    pink_balloon.velocityX= 3;
    pinkB.add(pink_balloon);
  }
}

function createGreen_balloon(){
  if(frameCount % 40 === 0){
    green_balloon =createSprite(0,100)
   green_balloon.y= Math.round(random(41,400));
    green_balloon.addImage(green_balloonImage);
    green_balloon.scale= 0.1;
    green_balloon.velocityX= 2;
    greenB.add(green_balloon);
  }
}

function createArrow()
{
  arrow = createSprite(480,220,20,50);
  arrow.addImage(arrowImage);
  arrow.scale = 0.3;
  arrow.y=bow.y
  arrow.velocityX=-6;
  arrow.lifetime=99; 
  arrowG.add(arrow);
}