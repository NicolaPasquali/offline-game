import '../lib/kontra'; // FIXME Sostituire con la versione minificata
import {createBackground} from './utilities';
import Menu from "./models/menu/Menu";

kontra.init('gameScreen');

let connected;
let background;
let menu;

function initialize() {
    setConnectionStatusListeners();
    background = createBackground(kontra, 'black');
    menu = new Menu(kontra);
    kontra.gameLoop({
        fps: 5,
        update: gameLoopUpdate,
        render: gameLoopRender
    }).start();
}

function setConnectionStatusListeners() {
    window.addEventListener('load', (e) => connected = navigator.onLine, false);
    window.addEventListener('online', (e) => connected = true, false);
    window.addEventListener('offline', (e) => connected = false, false);
}



let image = new Image();
image.src = 'assets/sprite.png';

let spriteSheet = kontra.spriteSheet({
    image: image,
    frameWidth: 16,
    frameHeight: 16,

    // this will also call createAnimations()
    animations: {
      // create 1 animation: idle
      idle: {
        frames: 1  // single frame - email
        }
    }
});

spriteSheet.createAnimations({
    man1: {
      frames: [5, 6],
      frameRate: 10,
      loop: true
  },
  man2: {
      frames: [9,10],
      frameRate: 10,
      loop: true
  },
  man2: {
      frames: [13,14],
      frameRate: 10,
      loop: true
  },
  bug: {
      frames: [7, 11], 
      frameRate: 10,
      loop: true
  }
});

function gameLoopUpdate() {
    menu.manageInput();
    spriteSheet.animations.man1.update();
}

function gameLoopRender() {
    background.render();
    menu.render();
    spriteSheet.animations.man1.render({x: 10, y: 10,});
}

image.onload = function() {
  initialize();
};

