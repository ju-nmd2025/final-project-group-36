export default class Platform {
  constructor(canvasWidth, canvasHeight, index) {
    this.x = Math.random() * (canvasWidth - 80);
    this.y = canvasHeight - index * 100;
    this.w = 80;
    this.h = 20;
  }

  draw() {
    push();
    fill("blue");
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  isColliding(platform, character) {
    if (
      platform.y === character.y + character.w &&
      platform.x <= character.x + character.w &&
      platform.x + platform.w >= character.x
    ) {
      return true;
    } else {
      return false;
    }
  }
}
