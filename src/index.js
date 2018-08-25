import '../lib/kontra'; // FIXME Sostituire con la versione minificata
import Player from './models/Player';
import {createSpriteFromEntity} from './utilities';

let player = new Player(20, 20);

kontra.init('gameScreen');

let playerSprite = createSpriteFromEntity(kontra, player);

function gameLoopUpdate() {
    setPlayerControls();
    setPlayerScreenBoundaries();
    playerSprite.update();
}

function setPlayerControls() {
    if (kontra.keys.pressed('left') || kontra.keys.pressed('a')) {
        playerSprite.dx = -Math.abs(player.speed);
    } else if (kontra.keys.pressed('right') || kontra.keys.pressed('d')) {
        playerSprite.dx = Math.abs(player.speed);
    } else {
        playerSprite.dx = 0;
    }

    if (kontra.keys.pressed('up') || kontra.keys.pressed('w')) {
        playerSprite.dy = -Math.abs(player.speed);
    } else if (kontra.keys.pressed('down') || kontra.keys.pressed('s')) {
        playerSprite.dy = Math.abs(player.speed);
    } else {
        playerSprite.dy = 0;
    }
}

function setPlayerScreenBoundaries() {
    if (playerSprite.x > kontra.canvas.width) {
        playerSprite.x = 0;
    }

    if (playerSprite.x < 0) {
        playerSprite.x = kontra.canvas.width;
    }
}

function gameLoopRender() {
    playerSprite.render();
}

const loop = kontra.gameLoop({
    fps: 60,
    update: gameLoopUpdate,
    render: gameLoopRender
});

loop.start();