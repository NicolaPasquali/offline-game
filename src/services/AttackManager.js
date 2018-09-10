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
        switch (selectedAction) {
            case 'write-code':
            case 'debug':
                return AttackManager.damage(player.name, selectedEnemy, 10);
            case 'meeting':
                return AttackManager.damage(player.name, selectedEnemy, 15);
            case 'pair-programming':
                return AttackManager.damage(player.name, selectedEnemy, 20);
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