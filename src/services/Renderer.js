export default class Renderer {
    constructor() {
        this.ctx = document.getElementById('gameScreen').getContext('2d');
    }

    renderEnemies(enemies) {
        var sprite = new Image();
        sprite.src = '../../assets/sprite_black.png';
        
        this._drawBackground();
        
        
        let sWidth = 36;
        let sHeight = 144;    

        enemies.forEach((enemy) => {
            this.ctx.drawImage(sprite, enemy.spriteX, enemy.spriteY, sWidth, sHeight, enemy.x, enemy.y, sWidth, sHeight);
        });
    }

    _drawBackground() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, 900, 400);
    }
}