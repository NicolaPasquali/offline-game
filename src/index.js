import '../lib/kontra'; // FIXME Sostituire con la versione minificata
import {createBackground} from './utilities';
import Menu from "./models/menu/Menu";

kontra.init('gameScreen');

let connected;
let background;
let menu;

function initialize() {
    setConnectionStatusListeners();
    background = createBackground(kontra, 'black');
    menu = new Menu(kontra);
    kontra.gameLoop({
        fps: 5,
        update: gameLoopUpdate,
        render: gameLoopRender
    }).start();
}

function setConnectionStatusListeners() {
    window.addEventListener('load', (e) => connected = navigator.onLine, false);
    window.addEventListener('online', (e) => connected = true, false);
    window.addEventListener('offline', (e) => connected = false, false);
}

function gameLoopUpdate() {
    menu.manageInput();
}

function gameLoopRender() {
    background.render();
    menu.render();
}

initialize();
