export default class Renderer {
    constructor() {
        this.ctx = document.getElementById('gameScreen').getContext('2d');
    }

    renderEnemies(enemies) {
        this._drawBackground();
        enemies.forEach((enemy) => {
            this.ctx.fillStyle = enemy.color;
            this.ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height)
        });
    }

    _drawBackground() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, 900, 400);
    }
}