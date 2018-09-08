import LogService from "./LogService";

export default class AttackManager {
    static damage(attackerName, targetEntity, amount) {
        targetEntity.damage(amount);
        LogService.logAttack(attackerName, targetEntity.name.toLowerCase(), amount);
    }

    static loseFocus(enemyName, player, amount) {
        player.loseFocus(amount);
        LogService.loseFocus(enemyName, amount);
    }

    static addStress(enemyName, player, amount) {
        player.addStress(amount);
        LogService.addStress(enemyName, amount);
    }

    static managePlayerAction(selectedAction, player, selectedEnemy) {
        switch (selectedAction) {
            case 'write-code':
                return selectedEnemy.damage(10);
            case 'debug':
                return selectedEnemy.damage(15);
            case 'meditate':
                player.addFocus(10);
                return false;
            case 'meeting':
                return selectedEnemy.damage(15);
            case 'pair-programming':
                return selectedEnemy.damage(20);
            case 'procrastinate':
                player.relieveStress(10);
                return false;
            default:
                break;
        }
    }
}