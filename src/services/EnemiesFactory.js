import Bug from '../models/enemies/Bug';

export default class EnemiesFactory {
    static spawnBasicEnemies(startingX, y, numberOfEnemies) {
        let enemies = [];
        for(let i = 0; i < numberOfEnemies; i++) {
            enemies.push(new Bug(startingX + i * 100, y));
        }
        return enemies;
    }
}