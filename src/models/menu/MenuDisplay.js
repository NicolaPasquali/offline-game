export default class MenuDisplay {
    constructor(kontra, menu) {
        this.kontra = kontra;
        this.menu = menu;
        this._history = [menu];
    }

    render() {
        // 900x585
        this.menu.items.forEach((row) => row.forEach((item) => item.render()));
    }

    manageInput() {
        // kontra.keys.pressed('left')
    }

    setMenu(menu) {
        this.menu = menu;
        this._history.push(menu);
    }
}