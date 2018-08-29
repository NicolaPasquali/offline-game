import Menu from './Menu';
import {createSpriteFromText} from '../../utilities';

export default class MenuFactory {
    constructor(kontra) {
        this.kontra = kontra;
    }

    mainMenu() {
        // Rimuovere le coordinate da qui e farle calcolare al renderer?
        // Altrimenti non ha senso usare una matrice
        const _attack = createSpriteFromText(this.kontra, 'Attack', 100, 475);
        const _defend = createSpriteFromText(this.kontra, 'Defend', 400, 475);
        const _skill = createSpriteFromText(this.kontra, 'Skill', 100, 545);
        const _magic = createSpriteFromText(this.kontra, 'Magic', 400, 545);

        return new Menu(
            [
                [_attack, _defend],
                [_skill, _magic]
            ]
        );
    }
}
