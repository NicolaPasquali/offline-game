import BasicEnemy from './BasicEnemy';

export default class Stakeholder extends BasicEnemy {
    constructor() {
        super();
        this.color = '#666b11';
        this.name = 'Stakeholder';
        this.hp = 70;
        this.maxHp = 70;
        this.attackPower = 4;
        this.debuffPower= 5;
    }
}