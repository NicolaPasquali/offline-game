import '../lib/kontra'; // FIXME Sostituire con la versione minificata
import {createBackground} from './utilities';

kontra.init('gameScreen');

let connected;
let background;

function initialize() {
    setConnectionStatusListeners();
    background = createBackground(kontra, 'black');
    kontra.gameLoop({
        fps: 60,
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
}

function gameLoopRender() {
    background.render();
}

initialize();
