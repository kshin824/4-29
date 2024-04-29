//mousePressed for eye color
//mouseX for head size
//mouseY for ear height

let eyeColor = 0;
let headSize=225;
let earHeight;

function setup() {
  createCanvas(510, 400);
  frameRate(10);
}

function draw() {
  //changing background
  let r = random(255);
  let g = random(255);
  let b = random(255);
  background(r, g, b);
  
  //mouse X and Y controls
  headSize = map(mouseX, 0, width, 225, 300);
  earHeight = map(mouseY, 0, height, 30, 200);

  //cat head
  noStroke();
  fill("orange");
  ellipse(251, 200,headSize);
  
  //eyes
  fill(eyeColor); 
  stroke('lightgreen')
  ellipse(200, 180, 40); // left eye
  ellipse(290, 180, 40); // right eye

  // ears
  noStroke();
  fill("orange");
  triangle(150, 150, 180, earHeight, 210, 150); // left ear
  triangle(290, 150, 320, earHeight, 350, 150); // right ear

  //nose
  noStroke();
  fill("brown");
  ellipse(245, 230, 20);

  //mouth
  noFill();
  stroke("brown");
  arc(245, 250, 40, 40, 0, PI);

  //whiskers
  stroke("brown");
  strokeWeight(2)
  line(235, 230, 120, 230); // top left whisker
  line(240, 230, 120, 290); // bottom left whisker
  line(200, 230, 380, 230); // top right whisker
  line(250, 230, 370, 290); // bottom right whisker
}

function mousePressed() {
  eyeColor = color(random(255), random(255), random(255));
}
