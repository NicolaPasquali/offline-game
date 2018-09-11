import BasicEnemy from './BasicEnemy';

export default class Manager extends BasicEnemy {
    constructor() {
        super();
        this.color = '#186b10';
        this.name = 'Manager';
        this.hp = 150;
        this.maxHp = 150;
        this.attackPower = 7;
        this.debuffPower= 15;
        this.spriteX = 36;
    }
}