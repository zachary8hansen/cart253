// Exercise 0 - Spiritual Self-Portrait
// zachary Hansen
// 12 September 2019
//
// Uses p5's set of shape and colour functions to draw a head
// covered in eyeballs due to too much curiosity and under a spotlight because why not...


// setup()
//
// Draws a blob

function setup() {

  // Set up the canvas

  createCanvas(500,500);
  background(0);
//spotlight
  noStroke()
  fill(220,230,290)
  triangle(250,-100,0,500,500,500)
//lightbulb
fill(225,200,50);
ellipse(250,50,50,50);
//lamp
noStroke()
fill(100)
triangle(250,-100,150,50,350,50)
  // Draw the head and body (or is it a chin?) in pink as well

  // No stroke because shapes look nicer without it I think
  noStroke();
  // Set the nice pink (it's not gonna be pink)
  fill(155,134,300);
  // The ellipse mode will make it easier to align everything
  ellipseMode(CENTER);
  // Draw the head
  ellipse(250,250,200,200);
  // Draw the body
  ellipse(250,400,300,400);

  // Draw the googly eyes

  // Draw the white backgrounds of the eyes
  //first eye
  fill(255);
  ellipse(250,225,50,50);

  // Draw the black pupils
  fill(0);
  ellipse(250,225,20,20);
//second eye
  fill(255);
  ellipse(300,425,50,50);

  // Draw the black pupils
  fill(0);
  ellipse(300,425,20,20);
  //third eye
  fill(255);
  ellipse(150,325,50,50);

  // Draw the black pupils
  fill(0);
  ellipse(150,325,20,20);
  //fourth eye
  fill(255);
  ellipse(280,310,50,50);

  // Draw the black pupils
  fill(0);
  ellipse(280,310,20,20);
  //fifth eye
  fill(255);
  ellipse(110,400,50,50);

  // Draw the black pupils
  fill(0);
  ellipse(110,400,20,20);
  //sixth eye
  fill(255);
  ellipse(200,400,50,50);

  // Draw the black pupils
  fill(0);
  ellipse(200,400,20,20);
  //seventh eye
  fill(255);
  ellipse(380,350,50,50);

  // Draw the black pupils
  fill(0);
  ellipse(380,350,20,20);
  //eighth eye
  fill(255);
  ellipse(380,450,50,50);

  // Draw the black pupils
  fill(0);
  ellipse(380,450,20,20);
  //nineth eye
  fill(255);
  ellipse(230,450,50,50);

  // Draw the black pupils
  fill(0);
  ellipse(230,450,20,20);
  //tenth eye
  fill(255);
  ellipse(250,360,50,50);

  // Draw the black pupils
  fill(0);
  ellipse(250,360,20,20);
  // Brow at this point is needed because why not?
  fill(150,134,300);
  rect(200,200,100,25);
}

// draw()
//
// Does nothing.

function draw() {
  // Nothing here for now.
}
