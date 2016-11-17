function Wendy(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    stroke(94, 132, 200);
    strokeWeight(2);
    fill(103, 145, 194);
    rect(this.x, this.y, 20, 20);
  }
}