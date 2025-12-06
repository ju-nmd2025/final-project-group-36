export default class Character {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.firstJump = true;
    //		this.isOnPlatForm = false;
  }

  draw() {
    rect(this.x, this.y, this.w, this.h);
  }

  isColliding(character, platform) {
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

  gravity(character, platform, platform2, canvasHeight) {
    if (
      character.y + character.h < canvasHeight &&
      !character.isColliding(character, platform) &&
      !character.isColliding(character, platform2)
    ) {
      character.y += 5;
    }
  }

  firstJumpFunction(character, canvasHeight) {
    if (this.firstJump === true && character.y + character.h == canvasHeight) {
      character.y -= 200;
    }
  }

  jump(character) {
    if (character.isColliding(character, platform)) {
      character.y -= 150;
      this.firstJump = false;
    }
  }
}
