export default class Renderer {
    constructor() {
        this.ctx = document.getElementById('gameScreen').getContext('2d');
    }

    renderEnemies(enemies) {
        enemies.forEach((enemy) => {
            this.ctx.fillStyle = enemy.color;
            this.ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height)
        });
    }
}