// goldenfish img.
let Goldenfish;
let counter0 = 0;
let countInterval0 = setInterval(other, 10);
let counter1 = 0;
let countInterval1 = setInterval(fishBody, 10);
let counter2 = 0;
let countInterval2 = setInterval(fishFace, 10);

// Cat & Tiger changing img.
let imgs = [];
let Tiger, Cat;

// random background img.
let Background = [];
let b1, b2, b3, b4, b5, b6;

function preload() {
  // goldenfish img.
  Goldenfish = loadImage('images/Goldenfish.jpg');

  // (dog gif.)
  cryingDog = loadImage('images/Crying dog.gif');

  // Cat & Tiger changing img.
  Tiger = loadImage('images/Tiger roaring.jpg');
  Cat = loadImage('images/Cat yawning.jpg');

  // background
  b1 = loadImage('images/Surrealism cello.jpg');
  b2 = loadImage('images/House on the hill.jpeg');
  b3 = loadImage('images/Winter house.jpg');
  b4 = loadImage('images/JHJ building.png');
  b5 = loadImage('images/WYH windmill.png');
  b6 = loadImage('images/2D planet art.jpg');
}

function setup() {
  createCanvas(750, 750);
  background(220);

  // Cat & Tiger changing img.
  frameRate(5);
  imgs.push(Tiger);
  imgs.push(Cat);
  Tiger.resize(280, 0);
  Cat.resize(280, 0);

  // (dog gif.)
  imageMode(CENTER);
  cryingDog.resize(250, 0);

  // random background img.
  b1.resize(750, 0);
  b2.resize(0, 750);
  b3.resize(0, 750);
  b4.resize(0, 750);
  b5.resize(750, 0);
  b6.resize(750, 0);

  Background.push(b1);
  Background.push(b2);
  Background.push(b3);
  Background.push(b4);
  Background.push(b5);
  Background.push(b6);

  let p = random(Background);
  image(p, width/2, height/2);

  textSize(30);
  strokeWeight(3);
  stroke(0);
  fill(255);
  text('(refresh to change the backround)', 260, 735);
}

function draw() {

  // (dog gif.)
  let r = random(imgs);
  image(r, 580, 520);
  cryingDog.loadPixels();

  for(let y = 0; y < cryingDog.height; y++){
    for(let x = 0; x < cryingDog.width; x++){
      let index = (x + y * cryingDog.width) * 4
      // cryingDog.pixels[index] = 0
      cryingDog.pixels[index + 1] = random(60, 255)
      cryingDog.pixels[index + 2] = random(70, 255)
      cryingDog.pixels[index + 3] = 255
    }
  }

  cryingDog.updatePixels();

  imageMode(CENTER);
  image(cryingDog, 200, 580);
}

function other(){
  let q = random(Goldenfish.width);
  let w = random(Goldenfish.height);
  let c = Goldenfish.get(int(q), int(w));
  fill(c);
  noStroke();
  square(q + 55, w + 55, 25);
  counter0++;
  if (counter0 > 1000){
    clearInterval(countInterval0);
  }
}

function fishBody(){
  let x = random(40, 390);
  let y = random(0, 250);
  let a = Goldenfish.get(int(x), int(y));
  fill(a);
  noStroke();
  ellipseMode(CENTER);
  rect(x + 75, y + 75, 30, 4);
  counter1++;
  if (counter1 > 1500){
    clearInterval(countInterval1);
  }
}

function fishFace(){
  let n = random(70, 250);
  let m = random(80, 200);
  let b = Goldenfish.get(int(n), int(m));
  fill(b);
  ellipse(n + 75, m + 75, 18, 20); 
  counter2++;
  if (counter2 > 2000){
    clearInterval(countInterval2);
  }
}