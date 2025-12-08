export default class Platform {
  constructor(canvasWidth, canvasHeight, index) {
    this.x = Math.random() * (canvasWidth - 80);
    this.y = canvasHeight - index * 75;
    this.w = 80;
    this.h = 20;
    this.index = index;
  }

  draw() {
    push();
    fill("blue");
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  isColliding(platform, character) {
    if (
      platform.y <= character.y + character.h &&
      character.y + character.h <= platform.y + platform.h &&
      platform.x <= character.x + character.w &&
      platform.x + platform.w >= character.x
    ) {
      return true;
    } else {
      return false;
    }
  }
  movingUp(platform, character, canvasHeight) {
    if (character.y <= canvasHeight / 2) {
      platform.y += 2;
    }
  }
  reGenerate(platform, canvasHeight, canvasWidth) {
    platform.x = Math.random() * (canvasWidth - 80);
    platform.y = canvasHeight - platform.index * 75;
  }
}
