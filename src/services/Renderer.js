// FIXME Aggiungere double buffering - Così com'è, va a scatti
// https://stackoverflow.com/questions/2795269/does-html5-canvas-support-double-buffering
export default class Renderer {
    constructor() {
        this.ctx = document.getElementById('gameScreen').getContext('2d');
        this.sprite = new Image();
        this.sprite.src = '../../assets/sprite_black.png';
    }

    renderEnemies(enemies) {
        this._drawBackground();
        setTimeout(() => {
            enemies.forEach((enemy) => {
                this.ctx.drawImage(this.sprite, enemy.spriteX, enemy.spriteY, enemy.width, enemy.height, enemy.x, 100,
                    enemy.width, enemy.height);
            });
        }, 100);
    }

    _drawBackground() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, 900, 400);
    }
}