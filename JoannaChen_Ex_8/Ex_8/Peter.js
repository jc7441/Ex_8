function Peter(position) {
  this.position = position.copy();
  //this.x = x;
  //this.y = y;

  this.update = function() { //peter pan is shifting!
    if (frameCount % 2 === 0) {
      this.position.x ++;
    } else if (frameCount % 2 == 1) {
      this.position.x --;
    } 
    this.display();
  }

  this.display = function() {
    stroke(100, 120, 40);
    strokeWeight(2);
    fill(100, 150, 40);
    ellipse(this.position.x, this.position.y, 15, 15);
  }
}