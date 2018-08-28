import '../lib/kontra'; // FIXME Sostituire con la versione minificata
import Player from './models/Player';
import {createEnemies, createSpriteFromEntity} from './utilities';

kontra.init('gameScreen');

let connected = checkOnlineStatus();

const playerObj = new Player(520, 20);
const background = kontra.sprite({
    x: 0,
    y: 0,
    color: 'black',
    width: kontra.canvas.width,
    height: kontra.canvas.height
});
let player = createSpriteFromEntity(kontra, playerObj);
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
    player.update();

    kontra.pointer.onDown(function(event, object) {
        console.log(event, object);
    });

    // enemies.forEach((enemy) => enemy.patrol());
}

function setPlayerControls() {
    if (kontra.keys.pressed('left') || kontra.keys.pressed('a')) {
        player.dx = -playerObj.speed;
    } else if (kontra.keys.pressed('right') || kontra.keys.pressed('d')) {
        player.dx = playerObj.speed;
    } else {
        player.dx = 0;
    }

    if (kontra.keys.pressed('up') || kontra.keys.pressed('w')) {
        player.dy = -playerObj.speed;
    } else if (kontra.keys.pressed('down') || kontra.keys.pressed('s')) {
        player.dy = playerObj.speed;
    } else {
        player.dy = 0;
    }
}

function setPlayerScreenBoundaries() {
    if (player.x + player.width > kontra.canvas.width) {
        player.x = kontra.canvas.width - player.width;
    }
    if (player.x < 0) {
        player.x = 0;
    }
    if (player.y + player.height > kontra.canvas.height) {
        player.y = kontra.canvas.height - player.height;
    }
    if (player.y < 0) {
        player.y = 0;
    }
}

function gameLoopRender() {
    background.render();
    checkCollisions();
    player.render();
    if (connected) {
        enemies.forEach((guard) => guard.sprite.render());
    } else {
        console.log('NOT connected');
    }
}

function checkCollisions() {
    enemies.forEach((guard) => {
        if (guard.sprite.collidesWith(player)) {
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
