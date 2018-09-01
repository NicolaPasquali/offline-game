import Entity from "../Entity";

export default class BasicEnemy extends Entity {
    constructor(x, y) {
        super(x, y);
        this.color = '#374F6B';
        this.name = 'Basic';
        this.hp = 50;
        this.maxHp = 50;
    }
}