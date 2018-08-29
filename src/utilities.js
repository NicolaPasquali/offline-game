import BasicEnemy from "./models/enemies/BasicEnemy";

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

export function createEnemies(kontra, numberOfGuards) {
    let enemies = [];
    for (let i = 0; i < numberOfGuards; i++) {
        let enemy = new BasicEnemy(10, 200 * i);
        enemy.sprite = createSpriteFromEntity(kontra, enemy);
        enemies.push(enemy);
    }
    return enemies;
}

export function createBackground(kontra, color) {
    return kontra.sprite({
        x: 0,
        y: 0,
        color: color,
        width: kontra.canvas.width,
        height: kontra.canvas.height
    });
}