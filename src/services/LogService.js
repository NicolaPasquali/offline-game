export default class LogService {
    constructor() {
        this._maxEntries = 14;
        this._logBoard = document.getElementById('game-screen__events_log');
    }

    logAttack(attacker, target, damage) {
        let template = `<div>${attacker} attacked ${target} dealing <span style="color: red">${damage}</span> damage</div>`;
        this._log(template);
    }

    loseFocus(enemy, amount) {
        this._parameterAlterationLog(enemy.name, 'made you lose', amount, 'wheat', 'focus');
    }

    addFocus(amount) {
        this._parameterAlterationLog('You', 'gained', amount, 'lightgreen', 'focus');
    }

    addStress(enemy, amount) {
        this._parameterAlterationLog(enemy.name, 'added', amount, 'wheat', 'stress');
    }

    relieveStress(amount) {
        this._parameterAlterationLog('You', 'relieved', amount, 'lightgreen', 'stress');
    }

    _parameterAlterationLog(origin, action, amount, color, parameter) {
        let template = `<div>${origin} ${action} <span style="color: ${color}">${amount}%</span> of ${parameter}</div>`;
        this._log(template);
    }

    _log(template) {
        let logElement = document.createElement('template');
        logElement.innerHTML = template;
        this._logBoard.appendChild(logElement.content.firstChild);
    }
}