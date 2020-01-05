/** @type {import("../typings/phaser")} */ // import typingu

import { MenuScene } from "./scenes/MenuScene"; // importy scen
import { PlayScene } from "./scenes/PlayScene"; // importy scen
import { PlayScene2 } from "./scenes/PlayScene2"; // importy scen
import { PauseScene } from "./scenes/PauseScene"; // importy scen
import { LeaderBoardScene} from "./scenes/LeaderBoardScene"; // importy scen

// ohraniceni okna hry
var myCustomCanvas = document.createElement('canvas');
myCustomCanvas.id = 'myCustomCanvas';
// myCustomCanvas.style = 'border: 4px solid black';

document.body.appendChild(myCustomCanvas);
// inicializace hry
let game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1280, // sirka okna
    height: 896, // vyska okna
    canvas: document.getElementById('myCustomCanvas'),
    //seznam scen
    scene: [
        MenuScene, PlayScene, PauseScene, LeaderBoardScene, PlayScene2,

    ],
    audio: {
        disableWebAudio: false
    },
    render: {
        pixelArt: true
    },
    // nastaveni fyziky(gravitace, fps ...)
    physics: {
        default: "arcade",
        arcade: {
            fps: 60,
            gravity: { y: 0 },
        }
    }
});
