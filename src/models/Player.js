import {Entity} from './Entity';

export default class Player extends Entity {
    constructor() {
        super();
        this.level = 1;
        this.hp = 50;
        this.maxHp = 50;
        this.xp = 0;
        this.xpToNextLevel = 50;
        this.name = 'You';

        // Statistics
        this.programming = 1;
        this.problemSolving = 1;
        this.communication = 1;
        this.teamWork = 1;

        // Statuses
        this.focus = 10000; // FIXME Riportami a 100
        this.stress = 0;
    }

    addXp(amount) {
        while (amount > 0) {
            if (amount <= this.xpToNextLevel - this.xp) {
                this.xp += amount;
                amount = 0;
            } else {
                amount -= this.xpToNextLevel - this.xp;
                this.xp += this.xpToNextLevel - this.xp;
            }
            this._levelUpIfHasEnoughXp();
        }
    }

    _levelUpIfHasEnoughXp() {
        if (this.xp === this.xpToNextLevel) {
            this.level++;
            this.xpToNextLevel += Math.round(this.xpToNextLevel * .10);
            this.maxHp += 5;
            this.programming += Math.round(Math.random() * 3);
            this.problemSolving += Math.round(Math.random() * 3);
            this.communication += Math.round(Math.random() * 3);
            this.teamWork += Math.round(Math.random() * 3);
            this.xp = 0;
        }
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