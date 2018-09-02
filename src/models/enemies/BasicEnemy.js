import {VisibleEntity} from '../Entity';

export default class BasicEnemy extends VisibleEntity {
    constructor(x, y) {
        super(x, y);
        this.color = '#374F6B';
        this.name = 'Basic';
        this.hp = 50;
        this.maxHp = 50;
    }
}