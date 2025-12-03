import { Platform } from "platform";
import { Character } from "./character";
import { movingPlatform } from "./movingPlatform";

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

// Death

let canvasWidth = 400;
let canvasHeight = 550;
let character = new Character(
  (canvasWidth - 50) / 2,
  canvasHeight - 50,
  50,
  50
);
let platform = new Platform(
  Math.random() * (canvasWidth - 80),
  canvasHeight - 100
);
let platform2 = new Platform(Math.random() * (canvasWidth - 80), 225);

function draw() {
  background(100, 100, 100);

  character.draw();
  platform.draw();
  platform2.draw();

  // still platform
  /* platform.x = 10;
  if (platform.x + platform.w < 0) {
    platform.x = 500;
  }*/

  if (
    character.y + character.h < canvasHeight &&
    !character.isColliding(character, platform)
  ) {
    character.y += 5;
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
    character.y -= 150;
  }
}
document.onkeydown = moveCharacter;
