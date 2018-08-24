import Entity from "./Entity";

export default class Player extends Entity {
    constructor(x, y) {
        super(x, y);
        this.fillColor = '#8450B9';
        this.shape = 'rectangle';
    }
}