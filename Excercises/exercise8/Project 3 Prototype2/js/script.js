/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

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

let test = "These are the remains of a cosmonaut in space";
let test2 = "No on knows where it came from";
let test3 = "It simply floats there";
let test4 = "but for a brief moment, every few hours"
let test5 = "It moves in a manner that shows extreme distress"


let apoc;
// preload()
//
// Description of preload

function preload() {
scp = loadImage("assets/images/cosmonaut.png");

apoc = loadSound("assets/sounds/annihilation1.wav");
}


// setup()
//
// Description of setup

function setup() {
createCanvas(windowWidth, windowHeight);
noStroke();
imageMode(CENTER);
apoc.loop();
star1 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star2 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star3 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star4 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star5 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star6 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star7 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star8 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star9 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star10 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star11 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star12 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star13 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star14 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star15 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star16 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star17 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star18 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star19 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star20 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);

star21 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star22 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star23 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star24 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star25 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star26 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star27 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star28 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star29 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star30 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star31 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star32 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star33 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star34 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star35 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star36 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star37 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star38 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star39 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);
star40 = new Star(random(0-windowWidth), random(0-windowHeight), 100, random(10, 255), 10);

}
function draw() {
background(0);
fill(255);
textSize(20);

//Display object
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


image(scp, windowWidth/2, windowHeight/2, 180, 250);

if (mouseX < windowWidth/2) {
  text(test, windowWidth/2 - 600, windowHeight/2);
  text(test2, windowWidth/2 - 600, windowHeight/2 +20);
  text(test3, windowWidth/2 - 600, windowHeight/2 +40);
  text(test4, windowWidth/2 - 600, windowHeight/2 +60);
  text(test5, windowWidth/2 - 600, windowHeight/2 +80);
}

//Objects' ability to move
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
