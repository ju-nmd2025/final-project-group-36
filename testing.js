import platform from "platform";
import { Character } from "./character";

/*function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

// Death

let canvasWidth = 400;
let canvasHeight = 400;
let character = new Character(50, 50, 50, 50);

function draw() {
  background(100, 100, 100);

  character.draw();
  platform.draw();

  // still platform
  platform.x -= 100

  if(platform.x <50;
   (platform.x + platform.w < 0) {
    platform.x = 500;
    //platform.x + platform.w >
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
}      if (platform.x > 50 && platform.w < 50 + 100);*/

/*function moving() {
   platform.draw();
  // moving platform
  platform.x -= 10;
  if (platform.x + platform.w <0) {
    platform.x = 500;
  }  }*/

    function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

// Death

let canvasWidth = 400;
let canvasHeight = 400;
let character = new Character(50, 50, 50, 50);

function draw() {
  background(100, 100, 100);

  character.draw();
  platform.draw();

  // still platform
  platform.x -= 100;
  if (platform.x + platform.w < 0) {
    platform.x = 500;
  }
   if (
    character.y + character.h < 300 &&
    !character.isColliding(character, platform)
  ) {
    character.y += 10;
  }
 };
  /*
  if (platform.x + platform.w <= 10) {
    platform.x += 10;
  } else if (platform.x + platform.w >= 200) {
    platform.x -= 10;
  } else {
    platform.x -= 10;
  }

  if (
    character.y + character.h < 300 &&
    !character.isColliding(character, platform)
  ) {
    character.y += 10;
  }
}