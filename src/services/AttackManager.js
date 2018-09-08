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
                return selectedEnemy ? selectedEnemy.damage(10) : undefined;
            case 'debug':
                return selectedEnemy ? selectedEnemy.damage(15) : undefined;
            case 'meditate':
                player.addFocus(10);
                return false;
            case 'meeting':
                return selectedEnemy ? selectedEnemy.damage(15) : undefined;
            case 'pair-programming':
                return selectedEnemy ? selectedEnemy.damage(20) : undefined;
            case 'procrastinate':
                player.relieveStress(10);
                return false;
            default:
                break;
        }
    }
}