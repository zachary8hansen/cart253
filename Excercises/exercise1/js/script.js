// Exercise 1 - Movement
// Zachary Hansen
//
// Code for exercise 1.




// The current position and size of the circles
//circle0
let circleX;

let circleY;

let circleSize = 100;

//circle 1
let circle1X;

let circle1Y;

let circle1Size = 200;



// The current position and size of the square

let squareX;

let squareY;

let squareSize = 350;

//Preparing the square that follows the mouse
let square1X;

let square1Y;

function preload() {

}

// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas

  createCanvas(640,640);
background(0,210,89);


  // Start the circles off screen to the bottom left

  // We divide the size by two because we're drawing from the center

  circleX = -circleSize/2;

  circleY = height + circleSize/2;

  circle1X = -circle1Size/0.5;

  circle1Y = height + circle1Size/3;

  // Start the square off screen to the bottom right

  // We divide the size by two because we're drawing from the center

  squareX = width + squareSize/2;

  squareY = height + squareSize/2;
//

  // We'll draw rectangles from the center

  rectMode(CENTER);

  // We won't have a stroke in this

  noStroke();
}

function draw() {

  // Move circle up and to the right

  circleX += 1;

  circleY -= 1;

  circle1X += 1;

  circle1Y -= 1;

  // Make the circle transparent red

  fill(255,0,0,10);

  // Display the circle

  ellipse(circleX,circleY,circleSize,circleSize);

  //moving the 2nd circle
  ellipse(circle1X,circle1Y,circle1Size,circle1Size)


  // Move square up and to the left

  squareX -= 2;

  squareY -= 1;

  // Make the square transparent blue

  fill(0,0,255,10);

  // Display the square

  rect(squareX,squareY,squareSize,squareSize);

//display the movement of square1
  square1X = mouseX;
  square1Y = mouseY;

  fill(0,50,0,40)
//display square1
rect(square1X,square1Y,50,50)

}
