var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime;
var ground,groundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage = loadImage("jungle.jfif");
 
}



function setup() {
  createCanvas(700, 450);
  
  ground = createSprite(380,421,900,10);
  //ground.addImage(groundImage);
  //ground.scale=1
  ground.velocityX=-4
  ground.x = ground.width/2;
  console.log(ground.x);
  
  monkey = createSprite(60,385,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.159;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  survivalTime = 0;
}


function draw() {
background("gray");
  
  stroke("black");
  textSize(20);
  fill("white");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,250,50);
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space")&& monkey.y >= 360) {
        monkey.velocityY = -16 ;
    }
    
   monkey.velocityY = monkey.velocityY + 0.7; 
  
   ground.visible=false;
    
   monkey.collide(ground);
    
  bananaSpawn();
  
  obstacleSpawn();
  
  
  
  drawSprites();
}


function bananaSpawn() {
  if(World.frameCount%80===0){
  banana = createSprite(700,Math.round(random(150, 220)), 10, 10);
  banana.addImage(bananaImage);
  banana.velocityX =-4;
  banana.lifetime =-1;
  banana.scale = 0.1;
  FoodGroup.add(banana);
  }
}

function obstacleSpawn(){
  if(World.frameCount%300===0){
   obstacle = createSprite(700,385,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -4;
  obstacle.lifetime = -1;
  obstacle.scale = 0.16;
  obstacleGroup.add(obstacle);
  }
}

