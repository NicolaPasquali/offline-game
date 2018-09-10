import BasicEnemy from './BasicEnemy';

export default class Bug extends BasicEnemy {
    constructor(x, y) {
        super(x, y);
        this.color = '#6b141d';
        this.name = 'Bug';
        this.hp = 35;
        this.maxHp = 35;
        this.attackPower = 1;
        this.debuffPower= 2;
    }
}