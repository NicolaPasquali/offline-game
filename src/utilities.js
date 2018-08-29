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
    console.log(image);
    return kontra.sprite({
        x: 0,
        y: 0,
        image: image,
        width: kontra.canvas.width,
        height: kontra.canvas.height
    });
}