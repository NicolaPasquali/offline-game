import {VisibleEntity} from '../Entity';

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
            player.damage(1);
        } else {
            if (random <= 580) {
                player.addStress(5);
            } else {
                player.loseFocus(5);
            }
        }
    }
}