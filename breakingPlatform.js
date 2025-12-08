export default class BreakingPlatform {
  constructor(canvasWidth, canvasHeight, index) {
    this.x = Math.random() * (canvasWidth - 80);
    this.y = canvasHeight - index * 75;
    this.w = 80;
    this.h = 20;
    this.index = index;
    this.firstcollide = true;
    this.fill = [0, 0, 255];
    this.stroke = [0, 0, 0];
  }

  draw() {
    push();
    fill(this.fill[0], this.fill[1], this.fill[2]);
    stroke(this.stroke[0], this.stroke[1], this.stroke[2]);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  isColliding(platform, character) {
    if (
      platform.y <= character.y + character.h &&
      character.y + character.h <= platform.y + platform.h &&
      platform.x <= character.x + character.w &&
      platform.x + platform.w >= character.x &&
      platform.firstcollide == true
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

  /*  isVisible(platform){
if(platform.firstcollide == true){
    platform.draw();
  }*/

  disappear(platform) {
    if (platform.firstcollide == false) {
      this.fill[0] = 100;
      this.fill[1] = 100;
      this.fill[2] = 100;
    } else if (platform.firstcollide == true) {
      this.fill[0] = 0;
      this.fill[1] = 0;
      this.fill[2] = 255;
      this.stroke[0] = 0;
      this.stroke[1] = 0;
      this.stroke[2] = 0;
    }
  }
}
