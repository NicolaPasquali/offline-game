import Player from '../models/Player';
import EnemiesFactory from '../models/enemies/EnemiesFactory';
import InformationDisplay from './InformationDisplay';
import PlayerControls from './PlayerControls';

export default class BattleSystem {
    constructor(kontra) {
        this.kontra = kontra;
        this.playerControls = new PlayerControls();
        this.player = new Player();
        this.enemies = [];
        this.informationDisplay = new InformationDisplay(this.player, this.enemies);
    }

    startBattle() {
        this._spawnEnemies();
    }

    _spawnEnemies() {
        this.enemies = EnemiesFactory.spawnBasicEnemies(this.kontra, 250, 175, 5);
        this.informationDisplay.enemies = this.enemies;
        setTimeout(() => this.playerControls.initializeEnemySelectionEvents());
    }

    stepBattle() {
        this.playerControls.awaitForAction()
            .then((selectedAction) => {
                console.log('Skill:', selectedAction);
                console.log('Enemy:', this.playerControls.selectedEnemyId);

                this.enemies.forEach((enemy) => {
                    enemy.attack(this.player);
                });
            });
    }

    render() {
        this.enemies.forEach((enemy) => enemy.render());
        this.informationDisplay.render();
    }
}
