const canvas = document.getElementById('gameCanvas');
let player;

function manageControls(key) {
    console.log('Pressed key:', key);
    player.x += 1;
    console.log('Player:', player);
}

document.addEventListener('keydown', ($event) => {
    const keyName = $event.key;
    manageControls(keyName);
})

function fillBackground(ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawPlayer(ctx, player) {
    ctx.fillStyle = 'hotpink';
    ctx.fillRect(player.x, player.y, 50, 50);
}

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    player = new Player(20, 20);

    fillBackground(ctx);
    drawPlayer(ctx, player);
}
