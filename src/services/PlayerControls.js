export default class PlayerControls {
    constructor() {
        this.selectedEnemyId = undefined;
    }

    initializeEnemySelectionEvents() {
        let enemies = document.getElementsByClassName('enemy');
        for (let i = 0; i < enemies.length; i++) {
            let enemy = enemies[i];
            enemy.addEventListener('click', () => {
                this.selectedEnemyId = enemy.getAttribute('id');
            });
        }
    }

    awaitForAction() {
        return new Promise((resolve) => {
            let skillElements = document.getElementsByClassName('action-button');
            for (let i = 0; i < skillElements.length; i++) {
                let skillElement = skillElements[i];
                skillElement.addEventListener('click', () => {
                    resolve(skillElement.getAttribute('skill'));
                });
            }
        });
    }
}