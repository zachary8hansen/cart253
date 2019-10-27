// Predator-Prey Simulation
// by Zachary Hansen
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predators
let tiger;
let tiger1;
let tiger2;
let tiger3;
let tiger4;
let tiger5;
let tiger6;
let tiger7;

// The three prey
let antelope;
let zebra;
let bee;



// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(150, 100, 5, color(200, 170, 0), 40);
  tiger1 = new Predator(200, 100, 5, color(200, 180, 0), 40);
  tiger2 = new Predator(250, 100, 5, color(200, 190, 0), 40);
  tiger3 = new Predator(300, 100, 5, color(200, 200, 0), 40);
  tiger4 = new Predator(350, 100, 5, color(200, 210, 0), 40);
  tiger5 = new Predator(400, 100, 5, color(200, 220, 0), 40);
  tiger6 = new Predator(450, 100, 5, color(200, 230, 0), 40);
  tiger7 = new Predator(500, 100, 5, color(200, 240, 0), 40);
  antelope = new Prey(100, 100, 10, color(255, 150, 10), 50);
  zebra = new Prey(100, 100, 8, color(255, 255, 255), 60);
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(2,20,200);

  // Handle input for the tigers
  tiger.handleInput();
  tiger1.handleInput();
  tiger2.handleInput();
  tiger3.handleInput();
  tiger4.handleInput();
  tiger5.handleInput();
  tiger6.handleInput();
  tiger7.handleInput();

  // Move all the "animals"
  tiger.move();
  tiger1.move();
  tiger2.move();
  tiger3.move();
  tiger4.move();
  tiger5.move();
  tiger6.move();
  tiger7.move();
  antelope.move();
  zebra.move();
  bee.move();

  // Handle the tigers eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);

  tiger1.handleEating(antelope);
  tiger1.handleEating(zebra);
  tiger1.handleEating(bee);

  tiger2.handleEating(antelope);
  tiger2.handleEating(zebra);
  tiger2.handleEating(bee);

  tiger3.handleEating(antelope);
  tiger3.handleEating(zebra);
  tiger3.handleEating(bee);

  tiger4.handleEating(antelope);
  tiger4.handleEating(zebra);
  tiger4.handleEating(bee);

  tiger5.handleEating(antelope);
  tiger5.handleEating(zebra);
  tiger5.handleEating(bee);

  tiger6.handleEating(antelope);
  tiger6.handleEating(zebra);
  tiger6.handleEating(bee);

  // Display all the "animals"
  tiger.display();
  tiger1.display();
  tiger2.display();
  tiger3.display();
  tiger4.display();
  tiger5.display();
  tiger6.display();
  tiger7.display();
  antelope.display();
  zebra.display();
  bee.display();
}
