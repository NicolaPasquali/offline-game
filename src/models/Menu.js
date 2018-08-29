import {createSpriteFromText} from "../utilities";

export default class Menu {
    constructor(kontra) {
        this.kontra = kontra;
        this._attack = createSpriteFromText(this.kontra, 'Attack', 100, 475);
        this._defend = createSpriteFromText(this.kontra, 'Defend', 400, 475);
        this._skill = createSpriteFromText(this.kontra, 'Skill', 100, 545);
        this._magic = createSpriteFromText(this.kontra, 'Magic', 400, 545);
        this._menusCurrentlyVisible = [this._attack, this._defend, this._skill, this._magic];
    }

    render() {
        // 900x585
        this._menusCurrentlyVisible.forEach((menu) => menu.render());
    }
}