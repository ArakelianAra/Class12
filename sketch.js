var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
//var frames=0
var cloudImage





function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage=loadImage("cloud.png")
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;


}

function draw() {
  //set background color
  /*
  colour - 256 shades (0-255)
  RGB - red, green, blue
  */
  background(170);
    //frames++

    //var ran = Math.round(random(60, 100))
    ///console.log(ran)
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 161.5) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  createClouds()

  
  drawSprites();

}

function createClouds(){
  if(frameCount%120===0){
    var cloud=createSprite(620,random(10,120),5,5)
    cloud.velocityX=-2;
    cloud.addImage(cloudImage) 
    cloud.scale=0.5
    console.log(trex.depth)
    console.log(cloud.depth)
    cloud.depth=trex.depth
    trex.depth++
  }
}

