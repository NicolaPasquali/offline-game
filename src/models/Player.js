import {Entity} from './Entity';

export default class Player extends Entity{
    constructor() {
        super();
        this.hp = 50;
        this.maxHp = 50;
        this.xp = 0;
        this.xpToNextLevel = 100;
        this.name = 'You';

        // Statistics
        this.programming = 1;
        this.problemSolving = 1;
        this.communication = 1;
        this.teamWork = 1;

        // Statuses
        this.focus = 100;
        this.stress = 0;
    }

    levelUp() {
        this.xpToNextLevel += 100;
        this.maxHp += 5;
        // TODO Increment statistics
    }

    addStress(amount) {
        this.stress = Math.min(100, this.stress + amount);
    }

    relieveStress(amount) {
        this.stress = Math.max(0, this.stress - amount);
    }

    addFocus(amount) {
        this.focus = Math.min(100, this.focus + amount);
    }

    loseFocus(amount) {
        this.focus = Math.max(0, this.focus - amount);
    }
}