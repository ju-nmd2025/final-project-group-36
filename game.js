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
let platforms = [];

let platform = new Platform(
  Math.random() * (canvasWidth - 80),
  canvasHeight - 100
);
let platform2 = new Platform(
  Math.random() * (canvasWidth - 80),
  canvasHeight - 200
);
let platform3 = new Platform(
  Math.random() * (canvasWidth - 80),
  canvasHeight - 300
);
let platform4 = new Platform(
  Math.random() * (canvasWidth - 80),
  canvasHeight - 400
);
let platform5 = new Platform(
  Math.random() * (canvasWidth - 80),
  canvasHeight - 500
);
platforms.push(platform, platform2, platform3, platform4, platform5);
function draw() {
  background(100, 100, 100);

  character.draw();
  for (let thePlatform of platforms) {
    thePlatform.draw();
  }

  // still platform
  /* platform.x = 10;
  if (platform.x + platform.w < 0) {
    platform.x = 500;
  }*/

  character.gravity(character, platform, platform2, canvasHeight);
  character.firstJumpFunction(character, canvasHeight);
  character.jump(character);
}

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
