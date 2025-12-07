import { Platform } from "platform";
import { Character } from "./character";
import { movingPlatform } from "./movingPlatform";
import { Button } from "./button";

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

// Death
let status = "menu";

let canvasWidth = 400;
let canvasHeight = 550;
let character = new Character(
  (canvasWidth - 50) / 2,
  canvasHeight - 50,
  50,
  50
);
let platforms = [];
let button = new Button(canvasWidth, canvasHeight, status);

let platform = new Platform(canvasWidth, canvasHeight, 1);
let platform2 = new Platform(canvasWidth, canvasHeight, 2);
let platform3 = new Platform(canvasWidth, canvasHeight, 3);
let platform4 = new Platform(canvasWidth, canvasHeight, 4);
let platform5 = new Platform(canvasWidth, canvasHeight, 5);
platforms.push(platform, platform2, platform3, platform4, platform5);

function draw() {
  background(100, 100, 100);
  if (button.status === "menu") {
    button.draw();
  } else if (button.status === "play") {
    character.draw();
    for (let thePlatform of platforms) {
      thePlatform.draw();
    }
    character.firstJumpFunction(character, canvasHeight);
    for (let thePlatform of platforms) {
      character.gravity(character, thePlatform, canvasHeight);
      character.jump(character, thePlatform);
    }
    character.teleport(character, canvasWidth);
  }

  // still platform
  /* platform.x = 10;
  if (platform.x + platform.w < 0) {
    platform.x = 500;
  }*/
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
