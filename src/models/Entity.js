export class Entity {
    constructor() {
        this.hp = 100;
        this.maxHp = 100;
        this.id = `ENT-${Math.floor(Math.random() * 500)}`
    }

    heal(amount) {
        this.hp = Math.min(this.maxHp, this.hp + amount);
    }

    damage(amount) {
        this.hp -= amount;
        return this.hp <= 0;
    }
}

export class VisibleEntity extends Entity {
    constructor(kontra, x, y) {
        super();
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.color = 'white';
    }

    _createSprite() {
        this._sprite = kontra.sprite({
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            color: this.color
        });
    }

    render() {
        this._sprite.render();
    }
}