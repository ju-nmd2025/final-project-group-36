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

  /*isColliding(character, platforms) {
    for (let thePlatform of platforms) {
      if (
        thePlatform.y === character.y + character.w &&
        thePlatform.x <= character.x + character.w &&
        thePlatform.x + thePlatform.w >= character.x
      ) {
        return true;
      } else {
        return false;
      }
    }
  }*/

  gravity(character, platform, canvasHeight) {
    if (
      character.y + character.h < canvasHeight &&
      !platform.isColliding(platform, character)
    ) {
      character.y += 2;
    }
  }

  firstJumpFunction(character, canvasHeight, status) {
    if (
      character.firstJump === true &&
      character.y + character.h == canvasHeight
    ) {
      character.y -= 200;
    }
  }
  gameOver(character, canvasHeight, button) {
    if (
      character.firstJump === false &&
      character.y + character.h == canvasHeight
    ) {
      button.status = "game over";
      character.firstJump = true;
    }
  }
  jump(character, platform) {
    if (platform.isColliding(platform, character)) {
      character.y -= 150;
      character.firstJump = false;
    }
  }

  teleport(character, canvasWidth) {
    if (character.x >= canvasWidth - character.w) {
      character.x = 0;
    } else if (character.x <= 0) {
      character.x = canvasWidth - character.w;
    }
  }
}
