import BasicEnemy from './BasicEnemy';

export default class Bug extends BasicEnemy {
    constructor() {
        super();
        this.color = '#6b141d';
        this.name = 'Bug';
        this.hp = 35;
        this.maxHp = 35;
        this.attackPower = 1;
        this.debuffPower= 2;
        this.xp = 5;
    }
}