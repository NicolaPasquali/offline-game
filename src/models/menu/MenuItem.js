import {createSpriteFromText} from "../../utilities";

export default class MenuItem {
    constructor(kontra, text, x, y, callback) {
        this.x = x;
        this.y = y;
        this.sprite = createSpriteFromText(kontra, text, x, y);
        this.callback = callback;
    }

    render() {
        this.sprite.render();
    }

    select() {
        this.callback();
    }
}