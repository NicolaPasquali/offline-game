import Entity from "../Entity";

export default class BasicGuard extends Entity {
    constructor(x, y) {
        super(x, y);
        this.color = '#374F6B';
        this.speed = 4;
    }

    patrol(limit, direction) {
        if (direction === 'horizontal') {
            this.sprite.dy = 0;
            if (this.sprite.x + this.width >= limit) {
                this.sprite.dx = -this.speed;
            }

            if (this.sprite.x <= this.x) {
                this.sprite.dx = this.speed;
            }
        }

        if (direction === 'vertical') {
            this.sprite.dx = 0;
            if (this.sprite.y + this.height >= limit) {
                this.sprite.dy = -this.speed;
            }

            if (this.sprite.y <= this.y) {
                this.sprite.dy = this.speed;
            }
        }
        this.sprite.update();
    }
}