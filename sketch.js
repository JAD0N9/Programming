
//The setup function only happens once
function setup() {
	createCanvas(2550, 2550); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(62,55,212); //an RGB color for the canvas' background
  //circle
  stroke(455,455,233) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,333,400); // center of canvas, 20px dia
}