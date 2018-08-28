export default class Entity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.color = 'white';
        this.speed = 5;
        this.maxHealth = 100;
        this.currentHealth = this.maxHealth;
    }

    heal(hp) {
        this.currentHealth = Math.min(this.maxHealth, this.currentHealth + hp);
    }

    damage(hp) {
        this.currentHealth -= hp;
        return this.currentHealth <= 0;
    }
}