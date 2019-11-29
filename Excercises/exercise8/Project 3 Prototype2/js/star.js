//Stars

//light and movement source for background
//

class Star {

constructor (x, y, speed, fillColor, radius) {

//position
this.x = x;
this.y = y;
this.radius = radius;
//speed & velocity
this.vx = -speed;
this.vy = 0;
this.fillColor = fillColor;
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
  ellipse(this.x, this.y, this.fillColor, this.radius);
  pop();
  }
}
