export default class MovingPlatform {
  constructor(canvasHeight, index) {
    this.x = 51;
    this.y = canvasHeight - index * 75;
    this.w = 80;
    this.h = 20;
    this.index = index;
    this.dir = 10;
  }

  draw() {
    push();
    fill("blue");
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  isColliding(movingPlatform, character) {
    if (
      movingPlatform.y <= character.y + character.h &&
      character.y + character.h <= movingPlatform.y + movingPlatform.h &&
      movingPlatform.x <= character.x + character.w &&
      movingPlatform.x + movingPlatform.w >= character.x
    ) {
      return true;
    } else {
      return false;
    }
  }
  movingUp(movingPlatform, character, canvasHeight) {
    if (character.y <= canvasHeight / 2) {
      movingPlatform.y += 2;
    }
  }
  reGenerate(movingPlatform, canvasHeight, canvasWidth) {
    movingPlatform.x = 51;
    movingPlatform.y = canvasHeight - movingPlatform.index * 75;
  }

  move() {
    this.x -= this.dir;
    if (this.x < 50) {
      this.dir = -5;
    } else if (this.x > 250) {
      this.dir = 5;
    }
  }
}
