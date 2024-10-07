let posX, posY
let diametro
let radio
let velX, velY;
let bh;


function setup() {
  createCanvas(windowWidth, windowHeight);
  bh= color(random(100, 255), random(100), random(255))
  
  radio = ceil(random(10, 50));
  diametro = radio*2;
  posX = random(radio, width - radio);
  posY = random(radio, height - radio);


  //velX = random(-10, 10);
  //velY = random(-10, 10);
  velX = 5
  velY = 4
}

function draw() {
    background(bh);
    fill(255);
    noStroke();
  

  posX += velX;
  posY += velY;

  if(posX > width - radio || posX < radio){
    velX *= -1;
    bh = color(random(100, 255), random(100), random(255))

  }
   
  if(posY > height - radio || posY < radio){
    velY *= -1;
    bh = color(random(100, 255), random(100), random(255))

  }
  
  circle(posX, posY, diametro)
}

