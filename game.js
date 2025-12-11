import { Platform } from "./platform.js";
import { Character } from "./character.js";
import { MovingPlatform } from "./movingPlatform.js";
import { Button } from "./button.js";
import { BreakingPlatform } from "./breakingPlatform.js";

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

window.setup = setup;

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
let movPlatform3 = new MovingPlatform(canvasHeight, 3);
let platform4 = new Platform(canvasWidth, canvasHeight, 4);
let brPlatform5 = new BreakingPlatform(canvasWidth, canvasHeight, 5);
let platform6 = new Platform(canvasWidth, canvasHeight, 6);
let platform7 = new Platform(canvasWidth, canvasHeight, 7);
platforms.push(
  platform,
  platform2,
  movPlatform3,
  platform4,
  brPlatform5,
  platform6,
  platform7
);

function draw() {
  background(100, 100, 100);
  if (button.status === "menu") {
    button.draw();
  } else if (button.status === "play") {
    for (let thePlatform of platforms) {
      thePlatform.draw();
    }
    character.draw();
    movPlatform3.move();
    character.firstJumpFunction(character, canvasHeight, button.status);
    for (let thePlatform of platforms) {
      character.gravity(character, thePlatform, canvasHeight);
      character.jump(character, thePlatform);
      thePlatform.movingUp(thePlatform, character, canvasHeight);
    }
    for (let thePlatform of platforms) {
      if (thePlatform.y + thePlatform.h >= canvasHeight) {
        thePlatform.y = platforms[platforms.length - 1].y - 75;
        thePlatform.x = Math.random() * (canvasWidth - 80);
        platforms.push(thePlatform);
        platforms.shift();
        if (thePlatform.index === 5) {
          thePlatform.firstcollide = true;
        }
      }
      brPlatform5.disappear(brPlatform5);
    }
    character.teleport(character, canvasWidth);
    character.gameOver(character, canvasHeight, button);
  } else if (button.status === "game over") {
    button.draw();
    text("game over", canvasWidth / 2 - 100, canvasHeight / 2);
    for (let thePlatform of platforms) {
      thePlatform.reGenerate(thePlatform, canvasHeight, canvasWidth);
      if (thePlatform.index === 5) {
        thePlatform.firstcollide = true;
      }
    }
    platforms.splice(0);
    platforms.push(
      platform,
      platform2,
      movPlatform3,
      platform4,
      brPlatform5,
      platform6,
      platform7
    );
  }

  // still platform
  /* platform.x = 10;
  if (platform.x + platform.w < 0) {
    platform.x = 500;
  }*/
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    character.x -= 20;
  }
  if (keyCode === RIGHT_ARROW) {
    character.x += 20;
  }
}

window.draw = draw;

window.addEventListener("click", function (event) {
  mousePressed();
});

window.addEventListener("keydown", function (event) {
  keyPressed();
});
