import '../lib/ga';
import Player from './models/Player';

const SCREEN_WIDTH = 1152;
const SCREEN_HEIGHT = 648;

let gameScene;
let player = new Player(20, 20);

const g = ga(SCREEN_WIDTH, SCREEN_HEIGHT, setup);

g.start();

function setup() {
    g.backgroundColor = 'black';

    console.log(createSpriteFromEntity(g, player));
    gameScene = g.group();
    // g.state = play;
}

function createSpriteFromEntity(g, entity) {
    console.log(entity);
    switch (entity.shape) {
        case 'rectangle':
            return g.rectangle(
                entity.width,
                entity.height,
                entity.fillColor,
                entity.strokeColor,
                1,
                entity.x,
                entity.y
            )
    }
}

function play() {
}