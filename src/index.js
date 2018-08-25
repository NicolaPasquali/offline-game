import '../lib/kontra'; // FIXME Sostituire con la versione minificata
import Player from './models/Player';
import {createGuards, createSpriteFromEntity} from './utilities';

let playerObj = new Player(20, 20);

kontra.init('gameScreen');

let player = createSpriteFromEntity(kontra, playerObj);
let guards = new Set(createGuards(kontra, 10));

function gameLoopUpdate() {
    setPlayerControls();
    setPlayerScreenBoundaries();
    player.update();
}

function setPlayerControls() {
    if (kontra.keys.pressed('left') || kontra.keys.pressed('a')) {
        player.dx = -Math.abs(playerObj.speed);
    } else if (kontra.keys.pressed('right') || kontra.keys.pressed('d')) {
        player.dx = Math.abs(playerObj.speed);
    } else {
        player.dx = 0;
    }

    if (kontra.keys.pressed('up') || kontra.keys.pressed('w')) {
        player.dy = -Math.abs(playerObj.speed);
    } else if (kontra.keys.pressed('down') || kontra.keys.pressed('s')) {
        player.dy = Math.abs(playerObj.speed);
    } else {
        player.dy = 0;
    }
}

function setPlayerScreenBoundaries() {
    if (player.x > kontra.canvas.width) {
        player.x = 0;
    }

    if (player.x < 0) {
        player.x = kontra.canvas.width;
    }

    if (player.y > kontra.canvas.height) {
        player.y = 0;
    }

    if (player.y < 0) {
        player.y = kontra.canvas.height;
    }
}

function gameLoopRender() {
    checkCollisions();
    player.render();
    guards.forEach((guard) => guard.render());
}

function checkCollisions() {
    guards.forEach((guard) => {
        if (guard.collidesWith(player)) {
            guards.delete(guard);
        }
    })
}

const loop = kontra.gameLoop({
    fps: 60,
    update: gameLoopUpdate,
    render: gameLoopRender
});

loop.start();