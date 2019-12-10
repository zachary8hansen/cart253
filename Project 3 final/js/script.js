/*****************

00110001 00111001 00110101 00111001
Zachary Hansen

This interactive page is an hommoge to the fictional SCP Universe and more
specifically, one of my favorite entities: SCP 1959 - The Lost Cosmonaut.

Stars fly past the floating cosmonaut in the vastness of space. A text
describing the entity appears if the mouse hovers over the area of the entity.
If the user clicks on the entity, they control a satellite passing by (press & hold)
Additionally, the entity changes position.

******************/



let star1;
let star2;
let star3;
let star4;
let star5;
let star6;
let star7;
let star8;
let star9;
let star10;
let star11;
let star12;
let star13;
let star14;
let star15;
let star16;
let star17;
let star18;
let star19;
let star20;

let star21;
let star22;
let star23;
let star24;
let star25;
let star26;
let star27;
let star28;
let star29;
let star30;
let star31;
let star32;
let star33;
let star34;
let star35;
let star36;
let star37;
let star38;
let star39;
let star40;
let scp;
let scp2;
let satImg;


//descibe text information
let test = "Item #: SCP-1959";
let test2 = "Object Class: Euclid";
let test3 = "Special Containment Procedures:";
let test3v1="As of this writing, SCP-1959 is yet to be contained.";
let test4 = "Description:"
let test4v1 = "SCP-1959 is an unmarked white space suit, similar";
let test4v2 = "in make to Soviet's SK-1 model used in Vostok Program";
let test4v3 = "with few alterations. The helmet's visor is badly damaged";
let test4v4 = "and misted over, preventing any observation of its";
let test5 = "interior. So far, all attempts to communicate with SCP-1959";
let test5v1 = "have failed.";
let test5v2 = "SCP-1959 appears to continuously orbit";
let test5v3 = "around the Earth at a reasonably constant speed. ";
let test6 = "Subject's position can vary between Low to High Earth";
let test6v1 = "Orbit at any given moment.SCP-1959 will ram through";
let test6v2 = "any obstacle it encounters, causing grave structural damage.";
let test7 = "While the subject is capable of independent movement,";
let test7v1 = "it remains motionless most of the time. On the occasion";
let test7v2 = "the subject does move, its body language shows signs";
let test7v3 = "of extreme distress and it will sometimes make attempts to break its visor.";
let test7v4 = "to break its visor.";

let apoc;

// preload()
//
// Description of preload

function preload() {
  scp = loadImage("assets/images/cosmonaut.png");
  scp2 = loadImage("assets/images/cosmonaut2.png");
  satImg = loadImage("assets/images/sat2.png");

  apoc = loadSound("assets/sounds/annihilation1.wav");
}


// setup()
//
// Description of setup

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  imageMode(CENTER);
// Create ominous background music loop
  apoc.loop();

// Define the stars
  star1 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star2 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star3 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star4 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star5 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star6 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star7 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star8 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star9 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star10 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star11 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star12 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star13 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star14 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star15 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star16 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star17 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star18 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star19 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star20 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);

  star21 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star22 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star23 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star24 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star25 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star26 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star27 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star28 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star29 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star30 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star31 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star32 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star33 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star34 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star35 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star36 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star37 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star38 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star39 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);
  star40 = new Star(random(0-windowWidth), random(0-windowHeight), 0.5, random(10, 255), 10);

}

// draw()
//
// Description of the visual display

function draw() {
  background(0);
  fill(0,200,0);
  textSize(20);

// Display objects
  star1.display();
  star2.display();
  star3.display();
  star4.display();
  star5.display();
  star6.display();
  star7.display();
  star8.display();
  star9.display();
  star10.display();
  star11.display();
  star12.display();
  star13.display();
  star14.display();
  star15.display();
  star16.display();
  star17.display();
  star18.display();
  star19.display();
  star20.display();

  star21.display();
  star22.display();
  star23.display();
  star24.display();
  star25.display();
  star26.display();
  star27.display();
  star28.display();
  star29.display();
  star30.display();
  star31.display();
  star32.display();
  star33.display();
  star34.display();
  star35.display();
  star36.display();
  star37.display();
  star38.display();
  star39.display();
  star40.display();

// Display the cosmonaut
  image(scp, windowWidth/2 +400, windowHeight/2, 180, 250);

// If the mouse hovers over cosmonaut area, text shows up
  if (mouseX > windowWidth/2 +300) {
    text(test, windowWidth/2 - 400, 80);
    text(test2, windowWidth/2 - 410, 100);
    text(test3, windowWidth/2 - 600, 140);
    text(test3v1, windowWidth/2 - 600, 170);
    text(test4, windowWidth/2 - 600, 210);
    text(test4v1, windowWidth/2 - 600, 240);
    text(test4v2, windowWidth/2 - 600, 260);
    text(test4v3, windowWidth/2 - 600, 280);
    text(test4v4, windowWidth/2 - 600, 300);
    text(test5, windowWidth/2 - 600, 320);
    text(test5v1, windowWidth/2 - 600, 340);
    text(test5v2, windowWidth/2 - 600, 370);
    text(test5v3, windowWidth/2 - 600, 390);
    text(test6, windowWidth/2 - 600, 410);
    text(test6v1, windowWidth/2 - 600, 430);
    text(test6v2, windowWidth/2 - 600, 450);
    text(test7, windowWidth/2 - 600, 480);
    text(test7v1, windowWidth/2 - 600, 500);
    text(test7v2, windowWidth/2 - 600, 520);
    text(test7v3, windowWidth/2 - 600, 540);
    text(test7v4, windowWidth/2 - 600, 560);
  }

//if mouse is pressed, function satellite is called
if (mouseIsPressed){
  satellite();
  }

  //when the mouse is pressed, it will control a satellite and change the
  //cosmonaut's position.
function satellite(){
  image(satImg,  mouseX, mouseY, random(130, 140), random(90, 100));
  image(scp2, windowWidth/2 +400, windowHeight/2, 180, 250);
  console.log ("hello");
}

// Objects' ability to move
star1.move();
star2.move();
star3.move();
star4.move();
star5.move();
star6.move();
star7.move();
star8.move();
star9.move();
star10.move();
star11.move();
star12.move();
star13.move();
star14.move();
star15.move();
star16.move();
star17.move();
star18.move();
star19.move();
star20.move();

star21.move();
star22.move();
star23.move();
star24.move();
star25.move();
star26.move();
star27.move();
star28.move();
star29.move();
star30.move();
star31.move();
star32.move();
star33.move();
star34.move();
star35.move();
star36.move();
star37.move();
star38.move();
star39.move();
star40.move();
}
