import BasicEnemy from './BasicEnemy';

export default class President extends BasicEnemy {
    constructor() {
        super();
        this.color = '#323232';
        this.name = 'President';
        this.hp = 1500;
        this.maxHp = 1500;
        this.attackPower = 35;
        this.debuffPower= 20;
    }
}