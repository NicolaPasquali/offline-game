import '../lib/kontra'; // FIXME Sostituire con la versione minificata
import Player from './models/Player';
import {createEnemies, createSpriteFromEntity} from './utilities';

kontra.init('gameScreen');

let connected = checkOnlineStatus();
const player = new Player(520, 20);
player.sprite = createSpriteFromEntity(kontra, player);
const background = kontra.sprite({
    x: 0,
    y: 0,
    color: 'black',
    width: kontra.canvas.width,
    height: kontra.canvas.height
});
let enemies = new Set(createEnemies(kontra, 2));

function init() {
    window.addEventListener('load', function (e) {
        connected = navigator.onLine;
    }, false);
    console.log('init');
}

function gameLoopUpdate() {
    setPlayerControls();
    setPlayerScreenBoundaries();
    // enemies.forEach((enemy) => enemy.patrol());
}

function setPlayerControls() {
    if (kontra.keys.pressed('left') || kontra.keys.pressed('a')) {
        player.sprite.dx = -player.speed;
    } else if (kontra.keys.pressed('right') || kontra.keys.pressed('d')) {
        player.sprite.dx = player.speed;
    } else {
        player.sprite.dx = 0;
    }

    if (kontra.keys.pressed('up') || kontra.keys.pressed('w')) {
        player.sprite.dy = -player.speed;
    } else if (kontra.keys.pressed('down') || kontra.keys.pressed('s')) {
        player.sprite.dy = player.speed;
    } else {
        player.sprite.dy = 0;
    }
}

function setPlayerScreenBoundaries() {
    if (player.sprite.x + player.sprite.width > kontra.canvas.width) {
        player.sprite.x = kontra.canvas.width - player.sprite.width;
    }
    if (player.sprite.x < 0) {
        player.sprite.x = 0;
    }
    if (player.sprite.y + player.sprite.height > kontra.canvas.height) {
        player.sprite.y = kontra.canvas.height - player.sprite.height;
    }
    if (player.sprite.y < 0) {
        player.sprite.y = 0;
    }
}

function gameLoopRender() {
    background.render();
    checkCollisions();
    player.sprite.render();
    if (connected) {
        enemies.forEach((guard) => guard.sprite.render());
    } else {
        console.log('NOT connected');
    }
}

function checkCollisions() {
    enemies.forEach((guard) => {
        if (guard.sprite.collidesWith(player.sprite)) {
            // player = undefined;
        }
    });
}

function checkOnlineStatus() {
    window.addEventListener('online', function (e) {
        connected = true;
    }, false);

    window.addEventListener('offline', function (e) {
        connected = false;
    }, false);
}

const loop = kontra.gameLoop({
    fps: 60,
    update: gameLoopUpdate,
    render: gameLoopRender
});

init();
loop.start();
