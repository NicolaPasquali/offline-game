import {VisibleEntity} from '../Entity';
import AttackManager from '../../services/AttackManager';

export default class BasicEnemy extends VisibleEntity {
    constructor(x, y) {
        super(x, y);
        this.color = '#374F6B';
        this.name = 'Basic';
        this.hp = 50;
        this.maxHp = 50;
    }

    attack(player) {
        let random = Math.floor(Math.random() * 500);
        if (random <= 480) {
            return AttackManager.damage(this.name, player, 1);
        } else {
            if (random <= 580) {
                return AttackManager.addStress(this.name, player, 5);
            } else {
                return AttackManager.loseFocus(this.name, player, 5);
            }
        }
    }
}