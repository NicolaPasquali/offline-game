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
            this.enemies.forEach((enemy) => {
                let infoElement = this._getOrCreateEnemyInfoElement(enemy);
                infoElement.childNodes[0].innerText = enemy.name;
                infoElement.childNodes[1].innerText = `HP: ${enemy.hp}/${enemy.maxHp}`;
            });
        }
    }

    _getOrCreateEnemyInfoElement(enemy) {
        let infoElement = document.getElementById(enemy.id);
        if (infoElement) {
            return infoElement;
        }

        infoElement = document.createElement('fieldset');
        infoElement.className = 'enemy';
        infoElement.id = enemy.id;
        infoElement.appendChild(document.createElement('legend'));
        infoElement.appendChild(document.createElement('div'));
        this._enemiesContainer.appendChild(infoElement);

        return infoElement;
    }
}