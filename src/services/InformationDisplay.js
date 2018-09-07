export default class InformationDisplay {
    constructor(player, enemies) {
        this.player = player;
        this.enemies = enemies;

        this._enemiesContainer = document.getElementById('enemiesContainer');
        this._playerCurrentHp = document.getElementById('playerCurrentHp');
        this._playerMaxHp = document.getElementById('playerMaxHp');
        this._playerFocus = document.getElementById('playerFocus');
        this._playerStress = document.getElementById('playerStress');
        this._playerProgramming = document.getElementById('playerProgramming');
        this._playerProblemSolving = document.getElementById('playerProblemSolving');
        this._playerCommunication = document.getElementById('playerCommunication');
        this._playerTeamWork = document.getElementById('playerTeamWork');
        this._playerCurrentXp = document.getElementById('playerCurrentXp');
        this._playerXpToNextLevel = document.getElementById('playerXpToNextLevel');
    }

    render() {
        this._renderPlayerInfo();
        this._renderEnemiesInfo();
    }

    _renderPlayerInfo() {
        this._playerCurrentHp.innerText = this.player.hp;
        this._playerMaxHp.innerText = `/ ${this.player.maxHp}`;
        this._playerFocus.innerText = `${this.player.focus}%`;
        this._playerStress.innerText = `${this.player.stress}%`;
        this._playerProgramming.innerText = this.player.programming;
        this._playerProblemSolving.innerText = this.player.problemSolving;
        this._playerCommunication.innerText = this.player.communication;
        this._playerTeamWork.innerText = this.player.teamWork;
        this._playerCurrentXp.innerText = this.player.xp;
        this._playerXpToNextLevel.innerText = `/ ${this.player.xpToNextLevel}`;
    }

    _renderEnemiesInfo() {
        if (this.enemies.length > 0) {
            this.enemies.forEach((enemy) => this._renderEnemyInfo(enemy));
        }
    }

    _renderEnemyInfo(enemy) {
        let originalElement = document.getElementById(enemy.id);
        let infoElement = document.createElement('template');

        infoElement.innerHTML =
            `<fieldset class="enemy" id="${enemy.id}"><legend>${enemy.name}</legend><div>HP: ${enemy.hp}/${enemy.maxHp}</div></fieldset>`;
        if (originalElement) {
            this._enemiesContainer.replaceChild(infoElement.content.firstChild, originalElement);
        } else {
            this._enemiesContainer.appendChild(infoElement.content.firstChild);
        }
    }

    deleteEnemy(id) {
        let enemyElement = document.getElementById(id);
        enemyElement.parentNode.removeChild(enemyElement);
    }
}