export default class LogService {
    static logAttack(attackerName, targetName, damage) {
        let template =
            `<div>${attackerName} attacked ${targetName} dealing <span style="color: red">${damage}</span> damage</div>`;
        LogService._log(template);
    }

    static logDeath(entityName) {
        let template = `<div>${entityName} <span style="color: red">died</span>!</div>`;
        LogService._log(template);
    }

    static loseFocus(enemyName, amount) {
        LogService._parameterAlterationLog(enemyName, 'made you lose', amount, 'wheat', 'focus');
    }

    static addFocus(amount) {
        LogService._parameterAlterationLog('You', 'gained', amount, 'lightgreen', 'focus');
    }

    static addStress(enemyName, amount) {
        LogService._parameterAlterationLog(enemyName, 'added', amount, 'wheat', 'stress');
    }

    static relieveStress(amount) {
        LogService._parameterAlterationLog('You', 'relieved', amount, 'lightgreen', 'stress');
    }

    static _parameterAlterationLog(origin, action, amount, color, parameter) {
        let template = `<div>${origin} ${action} <span style="color: ${color}">${amount}%</span> of ${parameter}</div>`;
        LogService._log(template);
    }

    static _log(template) {
        let logElement = document.createElement('template');
        logElement.innerHTML = template;
        // maxEntries = 14
        document.getElementById('game-screen__events_log').appendChild(logElement.content.firstChild);
    }
}