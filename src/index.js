import '../lib/kontra'; // FIXME Sostituire con la versione minificata
import {createBackground} from './utilities';

kontra.init('gameScreen');

let connected;
let background;

function initialize() {
    setConnectionStatusListeners();
    // Sarebbe figo avere un ufficio come sfondo
    // Al limite va bene anche colorare di nero la parte alta
    // Va convertita in jpg e ridotta il più possibile come dimensione!
    background = createBackground(kontra, './assets/background.png');
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
