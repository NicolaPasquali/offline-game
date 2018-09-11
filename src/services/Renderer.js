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
        //void ctx.drawImage(image, enemy.x, enemy.y, enemy.width, enemy.height, dx, dy, enemy.width, enemy.height);

        enemies.forEach((enemy) => {
            console.log(enemy);
            //this.ctx.fillStyle = enemy.color;
            //this.ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height)
            this.ctx.drawImage(sprite, enemy.spriteX, enemy.spriteY, enemy.width, enemy.height, enemy.x, enemy.y, enemy.width, enemy.height);
            console.log(sprite, enemy.spriteX, enemy.spriteY, enemy.width, enemy.height, enemy.x, enemy.y, enemy.width, enemy.height);
        });
    }

    _drawBackground() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, 900, 400);
    }
}