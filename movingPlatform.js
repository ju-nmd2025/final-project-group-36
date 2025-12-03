export let movingPlatform = {
  x: 250,
  y: 230,
  w: 80,
  h: 20,

  draw() {
    push();
    fill("blue");
    rect(this.x, this.y, this.w, this.h);
    pop();
  },

  dir: 10,

  move() {
    this.x -= this.dir;
  },
};
