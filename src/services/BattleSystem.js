import Player from '../models/Player';
import EnemySpawner from './EnemySpawner';
import InformationDisplay from './InformationDisplay';
import PlayerControls from './PlayerControls';
import Renderer from './Renderer';
import EventLogger from './EventLogger';
import AttackManager from "./AttackManager";

export default class BattleSystem {
    constructor() {
        this.renderer = new Renderer();
        this.playerControls = new PlayerControls();
        this.player = new Player();
        this.enemies = [];
        this.informationDisplay = new InformationDisplay(this.player, this.enemies);
        this.enemySpawner = new EnemySpawner();
        this._numberOfBattle = 0;
    }

    startBattle() {
        this._numberOfBattle++;
        EventLogger.battleStarted(this._numberOfBattle);
        this._spawnEnemies();
        this._render();
        this._loopBattle();
    }

    _spawnEnemies() {
        this.enemies = this.enemySpawner.spawnBattleNumber(this._numberOfBattle);
        this.informationDisplay.enemies = this.enemies;
    }

    _render() {
        this.renderer.renderEnemies(this.enemies);
        this.informationDisplay.render();
    }

    _loopBattle() {
        this._stepBattle()
            .then((enemiesLeft) => {
                if (enemiesLeft > 0) {
                    this._loopBattle();
                } else {
                    this._endBattleMessage();
                    this.player.hp = this.player.maxHp;
                    this.startBattle();
                }
            });
    }

    _stepBattle() {
        setTimeout(() => this.playerControls.addEnemySelectionEvents());
        return this.playerControls.awaitForAction()
            .then((selectedAction) => {
                if (this._managePlayerAction(selectedAction)) {
                    this.enemies.forEach((enemy) => enemy.attack(this.player));
                    this._render();
                }
                return this.enemies.length;
            });
    }

    _managePlayerAction(selectedAction) {
        if (selectedAction.cost <= this.player.focus) {
            this.player.focus -= selectedAction.cost;
            let selectedEnemy = this.enemies.find((enemy) => enemy.id === this.playerControls.selectedEnemyId);
            if (selectedAction.type === 'off' && !selectedEnemy) {
                alert('No enemy selected');
                return false;
            }
            if (AttackManager.managePlayerAction(selectedAction.name, this.player, selectedEnemy)) {
                this._manageDeadEnemy(selectedEnemy);
            }
            return true;
        }
        alert('Not enough focus');
        return false;
    }

    _manageDeadEnemy(enemy) {
        EventLogger.death(enemy.name);
        let index = this.enemies.findIndex((enemy) => enemy.id === this.playerControls.selectedEnemyId);
        this.enemies.splice(index, 1);
        this.informationDisplay.enemies = this.enemies;
        this.informationDisplay.deleteEnemy(this.playerControls.selectedEnemyId);
    }

    _endBattleMessage() {
        EventLogger.battleEnded(this._numberOfBattle);
    }
}
