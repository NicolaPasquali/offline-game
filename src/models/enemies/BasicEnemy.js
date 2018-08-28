import Entity from "../Entity";

export default class BasicEnemy extends Entity {
    constructor(x, y) {
        super(x, y);
        this.color = '#374F6B';
        this.speed = 4;
    }
}