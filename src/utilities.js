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