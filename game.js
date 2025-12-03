import platform from "platform";
import { Character } from "./character";
import { movingPlatform } from "./movingPlatform";

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

// Death

let canvasWidth = 400;
let canvasHeight = 400;
let character = new Character(175, 350, 50, 50);

function draw() {
  background(100, 100, 100);

  character.draw();
  platform.draw();

  // still platform
  platform.x = 10;
  if (platform.x + platform.w < 0) {
    platform.x = 500;
  }
  movingPlatform.draw();

  movingPlatform.move();
  if (movingPlatform.x < 50) {
    movingPlatform.dir = -5;
  } else if (movingPlatform.x > 250) {
    movingPlatform.dir = 5;
  }

  if (
    character.y + character.h < 300 &&
    !character.isColliding(character, platform)
  ) {
    character.y += 10;
  }
}

/*floor code becomes platform function keyPressed() {
    if (character.y + character.h === floor || character.isColliding(character, platform)) {
        character.y -= 120;
    }
}*/

function moveCharacter(e) {
  if (e.keyCode == 37) {
    character.x -= 10;
  }
  if (e.keyCode == 39) {
    character.x += 10;
  }
  if (e.keyCode == 32) {
    character.y -= 100;
  }
}
document.onkeydown = moveCharacter;
