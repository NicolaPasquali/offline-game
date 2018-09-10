export class Entity {
    constructor() {
        this.hp = 100;
        this.maxHp = 100;
        this.id = `ENT-${Math.floor(Math.random() * 500)}`;
    }

    damage(amount) {
        this.hp -= amount;
        return this.hp <= 0;
    }
}

export class VisibleEntity extends Entity {
    constructor() {
        super();
        this.x = 0;
        this.y = 175;
        this.width = 30;
        this.height = 30;
        this.color = 'white';
    }
}