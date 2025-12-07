export default class Button {
  constructor(canvasWidth, canvasHeight, status) {
    this.w = 100;
    this.h = 100;
    this.x = canvasWidth / 2;
    this.y = canvasHeight / 2;
    this.status = status;
  }

  draw() {
    push();
    fill(0, 0, 0);
    rect(this.x, this.y, this.w, this.h + 10);
    text("Start", this.x + 50, this.y + 55);
    push();

    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h &&
      mouseIsPressed === true
    ) {
      this.status = "play";
      console.log(this.status);
    }
  }
}
