export default class EventLogger {
    static attack(attackerName, targetName, damage) {
        let template =
            `<div>${attackerName} attacked ${targetName} dealing <span style="color: red">${damage}</span> damage</div>`;
        EventLogger._log(template);
    }

    static death(entityName) {
        let template = `<div>${entityName} <span style="color: red">died</span>!</div>`;
        EventLogger._log(template);
    }

    static loseFocus(enemyName, amount) {
        EventLogger._parameterAlterationLog(enemyName, 'made you lose', amount, 'wheat', 'focus');
    }

    static addFocus(amount) {
        EventLogger._parameterAlterationLog('You', 'recovered', amount, 'lightgreen', 'focus');
    }

    static addStress(enemyName, amount) {
        EventLogger._parameterAlterationLog(enemyName, 'added', amount, 'wheat', 'stress');
    }

    static relieveStress(amount) {
        EventLogger._parameterAlterationLog('You', 'relieved', amount, 'lightgreen', 'stress');
    }

    static _parameterAlterationLog(origin, action, amount, color, parameter) {
        let template = `<div>${origin} ${action} <span style="color: ${color}">${amount}%</span> of ${parameter}</div>`;
        EventLogger._log(template);
    }

    static battleStarted(numberOfBattle) {
        let template = `<div>Battle #${numberOfBattle} started!</div>`;
        EventLogger._log(template);
    }

    static battleEnded(numberOfBattle, xp) {
        let template = `<div>Battle #${numberOfBattle} ended! Earned ${xp} xp</div>`;
        EventLogger._log(template);
    }

    static _log(template) {
        let eventsLogElement = document.getElementById('game-screen__events_log-box');
        let logElement = document.createElement('template');

        logElement.innerHTML = template;
        if (eventsLogElement.childNodes.length >= 14) {
            eventsLogElement.removeChild(eventsLogElement.childNodes[1]);
        }
        document.getElementById('game-screen__events_log-box').prepend(logElement.content.firstChild);
    }
}