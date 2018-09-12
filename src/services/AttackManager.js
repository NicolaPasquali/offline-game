import EventLogger from './EventLogger';

export default class AttackManager {
    static damage(attackerName, targetEntity, amount) {
        EventLogger.attack(attackerName, targetEntity.name.toLowerCase(), amount);
        return targetEntity.damage(amount);
    }

    static loseFocus(enemyName, player, amount) {
        EventLogger.loseFocus(enemyName, amount);
        player.loseFocus(amount);
    }

    static addStress(enemyName, player, amount) {
        EventLogger.addStress(enemyName, amount);
        player.addStress(amount);
    }

    static managePlayerAction(selectedAction, player, selectedEnemy) {
        let amount = 0;
        switch (selectedAction) {
            case 'write-code':
            case 'debug':
                amount = 10 + Math.round(player.programming * player.problemSolving * .10);
                return AttackManager.damage(player.name, selectedEnemy, amount);
            case 'meeting':
                amount = 15 + Math.round(player.communication * player.teamWork * .10);
                return AttackManager.damage(player.name, selectedEnemy, amount);
            case 'pair-programming':
                amount = 20 + Math.round(player.programming * player.communication * player.teamWork * .10);
                return AttackManager.damage(player.name, selectedEnemy, amount);
            case 'meditate':
                EventLogger.addFocus(10);
                player.addFocus(10);
                break;
            case 'procrastinate':
                EventLogger.relieveStress(10);
                player.relieveStress(10);
                break;
        }
    }
}