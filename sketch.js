
var mario;
var marioimg;
var ground;
var rand;
var i;
var g;
var s;
var bg;
var brick,coin,bimg;
var brickg;
var coing;

function preload(){
  bg = loadImage("images/bg.jpg")
  i = loadAnimation("images/obs3.png")
  marioimg = loadAnimation("images/img1.png","images/img2.png","images/img3.png","images/img4.png","images/img5.png")
bimg = loadImage("images/brick1.png")
}
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background = createSprite(width/2,height/2,width,height);
  background.scale = 0.55;
  background.addImage(bg);
  mario = createSprite(40,height/2,10,10);
  mario.scale = 2
  mario.addAnimation("mario_img",marioimg)
  ground = createSprite(width/2,height-8,width,30)
  ground.visible = false;
  brickg = new Group();
  coing = new Group();
}
 
function draw() {
  background.velocityX = -3;
  if(background.x < width/2 ){
    background.x = background.width/2
  }
console.log(mario.y);
  rand = random(-15,-5)
  
  if(keyDown("space") && mario.y >= 541.8){
    mario.velocityY = rand;
    //mario.velocityX = 3;
  }
 mario.velocityY = mario.velocityY + 0.8 ;
  mario.collide(ground);
 for(var i = 0; i < brickg.length;i++){
   if(brickg.get(i).isTouching(mario)){
   brickg.get(i).destroy();
   //coin.velocityY(-1)
  coin(); //coing.get(i).visible = true;()
   
   }
   
   } 
  Enemy();
  brick();
  drawSprites();
}

function Enemy(){
  if(frameCount % 227 === 0){
  var obst = createSprite(width,height-50);
  obst.velocityX = -3;
  obst.scale = 3;
    obst.addAnimation("obstacle",i)
  console.log(obst.x);
}
}
function coin (){
  var coin = createSprite(30,20,30,30);
  coing.add(coin);
  coin.velocityY = -3;
}
function brick (){
  if(frameCount % 100 === 0){
    
  var brick  = createSprite(width,Math.round 
(random(200,height-200),120,10));
brick.addImage(bimg);
  brick.velocityX = -3;
  brickg.add(brick);
    //obst.addAnimation("obstacle",i)
  //console.log(obst.x);
  }
}
