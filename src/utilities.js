export function createSpriteFromEntity(kontra, entity) {
    return kontra.sprite({
        x: entity.x,
        y: entity.y,
        color: entity.color,
        width: 20,
        height: 40,
        dx: entity.speed
    });
}