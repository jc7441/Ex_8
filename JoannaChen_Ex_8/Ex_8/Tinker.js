function Tinker(position) {
  this.velocity = createVector(random(1, 2), random(1, 2));
  this.position = position.copy();
  //this.x = x;
  //this.y = y;

  this.update = function() { //tinkerbell flies away!!
    var r = random(1);
    if (r < 0.5) {
      this.velocity.x = (this.velocity.x + .5);
    } else if (r > 0.5) {
      this.velocity.x - .5;
    } else if (r < 0.6) {
      this.velocity.y++;
    } else {
      this.velocity.y--;
    }
    this.position.add(this.velocity);
    this.display();
  }

  this.display = function() {
    stroke(219, 217, 120);
    strokeWeight(2);
    fill(245, 242, 134, 200);
    ellipse(this.position.x, this.position.y, 10, 10);
  }
}