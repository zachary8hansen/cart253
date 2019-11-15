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
let scp;

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
imageMode(CENTER);
apoc.loop();

}
function draw() {
background(0);

image(scp, windowWidth/2, windowHeight/2, 180, 250);

}
