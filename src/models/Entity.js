export default class Entity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.color = 'white';
        this.maxHp = 100;
        this.id = `ENT-${Math.random() * Math.random() + Math.random()}`
    }

    heal(amount) {
        this.hp = Math.min(this.maxHp, this.hp + amount);
    }

    damage(amount) {
        this.hp -= amount;
        return this.hp <= 0;
    }
}