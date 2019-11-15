//Stars

//light and movement source for background
//

class star {

constructor (x, y, speed, fillColor, width, height) {

//position
this.x = x;
this.y = y;
this.width = width;
this.height = height;
//speed & velocity
this.vx = 0;
this.vy = 0;
this.speed = speed;
  }
}

move() {

//Update position
  this.x += this.vx;
  this.y += this.vy;
//handle wrapping
this.handleWrapping();
}

handleWrapping() {

  if (this.x < 0) {
      this.x += width;
    }
    else if (this.x > width) {
      this.x -= width;
    }
    // Off the top or bottom
    if (this.y < 0) {
      this.y += height;
    }
    else if (this.y > height) {
      this.y -= height;
    }
}

display() {
  push();
  noStroke();
  fill(this.fillColor);
  rect(this.x, this.y, this.width, this.height)
  pop();
}
