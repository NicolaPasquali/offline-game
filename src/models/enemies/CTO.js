import BasicEnemy from './BasicEnemy';

export default class CTO extends BasicEnemy {
    constructor(x, y) {
        super(x, y);
        this.color = '#7e17b5';
        this.name = 'CTO';
        this.hp = 450;
        this.maxHp = 450;
        this.attackPower = 12;
        this.debuffPower= 9;
    }
}