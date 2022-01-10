var groundImg;
var girl, ground;
function preload() {
  groundImg = loadImage("ground.jpg");
  boy = loadImage("boy.jfif");
  skateboard = loadImage("download.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ground = createSprite(600, 200);
  ground.addImage("ground", groundImg);
  ground.scale = 3.6;
  charecter = createSprite(200, 350);
  charecter.addImage("boy", boy);
  vehicle = createSprite(200, 450);
  vehicle.addImage("skate", skateboard);
  vehicle.scale = 0.7;
}

function draw() {
  drawSprites();
}
