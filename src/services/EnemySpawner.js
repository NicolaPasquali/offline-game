import Bug from '../models/enemies/Bug';
import AssholeColleague from '../models/enemies/AssholeColleague';
import Manager from '../models/enemies/Manager';
import Stakeholder from '../models/enemies/Stakeholder';
import CTO from '../models/enemies/CTO';
import President from '../models/enemies/President';

export default class EnemySpawner {
    constructor() {
        this._bossList = [
            [new AssholeColleague(), new Bug(), new AssholeColleague(), new Bug()],
            [new Manager(), new Bug(), new AssholeColleague(), new Manager()],
            [new Stakeholder(), new Bug(), new Bug(), new Stakeholder(), new Stakeholder()],
            [new CTO()],
            [new President()]
        ];
    }

    spawnBattleNumber(battleNumber) {
        if (battleNumber % 10 === 0) {
            return this._addHorizontalCoordinateToEnemies(this._bossList[battleNumber % 10], 250);
        }
        return this._addHorizontalCoordinateToEnemies(this._randomEnemyParty(battleNumber), 250);
    }

    _addHorizontalCoordinateToEnemies(enemies, startingX) {
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].x = startingX + i * 100;
        }
        return enemies;
    }

    _randomEnemyParty(battleNumber) {
        let enemies = [];
        let partySize = Math.max(1, Math.round(Math.random() * 5));
        for (let i = 0; i < partySize; i++) {
            let randomEnemy = Math.round(Math.random() * (battleNumber / 10));
            enemies.push(this._createEnemy(randomEnemy));
        }
        return enemies;
    }

    _createEnemy(enemyType) {
        switch (enemyType) {
            case 0:
                return new Bug();
            case 1:
                return new AssholeColleague();
            case 2:
                return new Manager();
            case 3:
                return new Stakeholder();
            default:
                return new Bug();
        }
    }
}