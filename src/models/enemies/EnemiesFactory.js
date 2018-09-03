import BasicEnemy from "./BasicEnemy";

export default class EnemiesFactory {
    static spawnBasicEnemies(kontra, startingX, y, numberOfEnemies) {
        let enemies = [];

        for(let i = 0; i < numberOfEnemies; i++) {
            enemies.push(new BasicEnemy(kontra, startingX + i * 100, y));
        }

        return enemies;
    }
}