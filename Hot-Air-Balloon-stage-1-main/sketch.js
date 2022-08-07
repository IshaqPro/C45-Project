var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload()
{
bgImg = loadImage("assets/bg.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup()
{

createCanvas(1500,700);

//background image
// bg = createSprite(165,485,10,10);
// bg.addImage(bgImg);
// bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,700,2800,20);
bottomGround.visible = true;

topGround = createSprite(200,10,2800,20);
topGround.visible = true;
      
//creating balloon     
balloon = createSprite(100,100,150,150);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;
}

function draw() 
{
  
  background(bgImg);
        
  //making the hot air balloon jump
  if(keyDown("space")) 
  {
     balloon.velocityY = -6 ;
  }

  //adding gravity
  balloon.velocityY = balloon.velocityY + 2;

  //balloon.bounce(edges);
  
  balloon.collide(bottomGround);
  drawSprites();
        
}