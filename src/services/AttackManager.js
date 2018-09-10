import EventLogger from './EventLogger';

export default class AttackManager {
    static damage(attackerName, targetEntity, amount) {
        targetEntity.damage(amount);
        EventLogger.attack(attackerName, targetEntity.name.toLowerCase(), amount);
    }

    static loseFocus(enemyName, player, amount) {
        player.loseFocus(amount);
        EventLogger.loseFocus(enemyName, amount);
    }

    static addStress(enemyName, player, amount) {
        player.addStress(amount);
        EventLogger.addStress(enemyName, amount);
    }

    static managePlayerAction(selectedAction, player, selectedEnemy) {
        switch (selectedAction) {
            case 'write-code':
                return AttackManager.damage(player.name, selectedEnemy, 10);
            case 'debug':
                return AttackManager.damage(player.name, selectedEnemy, 10);
            case 'meditate':
                EventLogger.addFocus(10);
                player.addFocus(10);
            case 'meeting':
                return AttackManager.damage(player.name, selectedEnemy, 15);
            case 'pair-programming':
                return AttackManager.damage(player.name, selectedEnemy, 20);
            case 'procrastinate':
                EventLogger.relieveStress(10);
                player.relieveStress(10);
            default:
                break;
        }
    }
}