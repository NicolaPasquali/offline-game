import BasicEnemy from './BasicEnemy';

export default class AssholeColleague extends BasicEnemy {
    constructor(x, y) {
        super(x, y);
        this.color = '#666b11';
        this.name = 'Asshole Colleague';
        this.hp = 50;
        this.maxHp = 50;
        this.attackPower = 2;
        this.debuffPower= 4;
    }
}