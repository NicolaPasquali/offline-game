import Entity from "../models/Entity";

export default class BasicGuard extends Entity {
    constructor(x, y) {
        super(x, y);
        this.color = '#374F6B';
    }
}