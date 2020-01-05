// inicializace promennych
var resumebutton;
var resume = false;
var level;
var menubutton;


export class PauseScene extends Phaser.Scene {
    constructor() {
        super({
            key: "PauseScene",
        })
    }
    init(data) {

        level = data.level;
    }

    preload() {
      
    }

    create() {
        // tlacitka
        resumebutton = this.add.image(643, 535, 'resume');
        menubutton = this.add.image(645, 505, 'menu');

    
        resumebutton.setInteractive();
        menubutton.setInteractive();

        resumebutton.on('pointerup', function (pointer) {
            resume = true;

        });
        menubutton.on('pointerup', function (pointer) {


            this.scene.start("MenuScene");

            if (level === 1) {
                
                this.scene.stop("PlayScene");
            }
            /*
            if (level === 2) {
                this.scene.stop("Level2Scene");
            }
            if (level === 3) {
                this.scene.stop("Level3Scene");
            }
            if (level === 4) {
                this.scene.stop("Level4Scene");
            }
*/
            level = 1;
            this.scene.stop();

        }, this);
    }

    update() {

        // navrat do levelu
        if (resume) {
            if (level === 1) {
                this.scene.resume("PlayScene");
            }
           /* if (level === 2) {
                this.scene.resume("Level2Scene");
            }
            if (level === 3) {
                this.scene.resume("Level3Scene");
            }
            if (level === 4) {
                this.scene.resume("Level4Scene");
            }*/
            resume = false;
            this.scene.stop();
        }
    }
}