import Entity from "../Entity";

export default class BasicGuard extends Entity {
    constructor(x, y, patrolPath) {
        super(x, y);
        this.color = '#374F6B';
        this.speed = 4;
        this.patrolPath = patrolPath;
        this._currentPatrolStep = 0;
        this._currentPathCoordinate = this.patrolPath[this._currentPatrolStep];
    }

    setPatrolPath(path) {
        this.patrolPath = path;
    }

    patrol() {
        this._updateCurrentPathCoordinate();

        let hDistance = this._currentPathCoordinate.x - this.sprite.x;
        let vDistance = this._currentPathCoordinate.y - this.sprite.y;

        this.sprite.dx = hDistance < 0 ? Math.max(-this.speed, hDistance) : Math.min(this.speed, hDistance);
        this.sprite.dy = vDistance < 0 ? Math.max(-this.speed, vDistance) : Math.min(this.speed, vDistance);

        this.sprite.update();
    }

    _updateCurrentPathCoordinate() {
        if (this.sprite.x === this._currentPathCoordinate.x && this.sprite.y === this._currentPathCoordinate.y) {
            this._currentPatrolStep++;
            this._revertPatrolPathIfEnded();
            this._currentPathCoordinate = this.patrolPath[this._currentPatrolStep];
        }
    }

    _revertPatrolPathIfEnded() {
        if (this._currentPatrolStep === this.patrolPath.length) {
            this.patrolPath = this.patrolPath.reverse();
            this._currentPatrolStep = 0;
        }
    }
}