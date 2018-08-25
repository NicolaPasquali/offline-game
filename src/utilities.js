import BasicGuard from "./guards/BasicGuard";

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

export function createGuards(kontra, numberOfGuards) {
    let guards = [];
    for (let i = 0; i < numberOfGuards; i++) {
        let guard = new BasicGuard(10, 35 * i);
        let sprite = createSpriteFromEntity(kontra, guard);
        guard.sprite = createSpriteFromEntity(kontra, guard);
        guards.push(guard);
    }
    return guards;
}