import BasicEnemy from './models/enemies/BasicEnemy';

export function createSpriteFromEntity(kontra, entity) {
    return kontra.sprite({
        x: entity.x,
        y: entity.y,
        color: entity.color,
        width: entity.width,
        height: entity.height,
        dx: entity.speed
    });
}

export function createSpriteFromText(kontra, text, x, y, color = 'white') {
    return kontra.sprite({
        color: color,
        render: function() {
            this.context.font = '30px Arial';
            this.context.fillStyle = this.color;
            this.context.fillText(text, x, y);
        }
    });
}

export function createEnemies(kontra, numberOfEnemies) {
    let enemies = [];
    for (let i = 0; i < numberOfEnemies; i++) {
        let enemy = new BasicEnemy(10, 200 * i);
        enemy.sprite = createSpriteFromEntity(kontra, enemy);
        enemies.push(enemy);
    }
    return enemies;
}

export function createBackground(kontra, imagePath) {
    let image = new Image();
    image.src = imagePath;
    return kontra.sprite({
        x: 0,
        y: 0,
        image: image,
        width: kontra.canvas.width,
        height: kontra.canvas.height
    });
}