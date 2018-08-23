import '../lib/ga';
import OfflinePlayer from "./models/OfflinePlayer";

const player = new OfflinePlayer(20, 20);
console.log('Player\'s position:', player.x, player.y);

const g = ga(
    512, 512, setup
);

//Start the Ga engine.
g.start();

function setup() {
    g.backgroundColor = 'hotpink';
}
