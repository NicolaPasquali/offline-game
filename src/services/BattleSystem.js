import Player from '../models/Player';
import EnemiesFactory from '../models/enemies/EnemiesFactory';
import InformationDisplay from './InformationDisplay';
import PlayerControls from './PlayerControls';
import Renderer from './Renderer';

export default class BattleSystem {
    constructor() {
        this.renderer = new Renderer();
        this.playerControls = new PlayerControls();
        this.player = new Player();
        this.enemies = [];
        this.informationDisplay = new InformationDisplay(this.player, this.enemies);
    }

    startBattle() {
        this._spawnEnemies();
        this._render();
        this._loopBattle();
    }

    _spawnEnemies() {
        this.enemies = EnemiesFactory.spawnBasicEnemies(250, 175, 5);
        this.informationDisplay.enemies = this.enemies;
        setTimeout(() => this.playerControls.initializeEnemySelectionEvents());
    }

    _loopBattle() {
        this._stepBattle()
            .then(() => {
                if (this.enemies.length > 0) {
                    this._loopBattle();
                } else {
                    this.startBattle();
                }
            });
    }

    _stepBattle() {
        return this.playerControls.awaitForAction()
            .then((selectedAction) => {
                console.log('Skill:', selectedAction);
                console.log('Enemy:', this.playerControls.selectedEnemyId);

                this.enemies.forEach((enemy) => enemy.attack(this.player));
                this._render();
            });
    }

    _render() {
        this.renderer.renderEnemies(this.enemies);
        this.informationDisplay.render();
    }
}
