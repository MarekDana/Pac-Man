// inicializace promennych (kdyz se inicializuji v create, tak to nefunguje)


var keys;
var PacMan;
var RedGhost;
var GreenGhost;
var PurpleGhost;
var GreyGhost;
var CoinLayer;
var BonusLayer;
var coins;
var bonus;
var coinScore = 0;
var level = 1;
var topLayer;
var map;
var terrain;
var bonusF;
var text;

var esc;
var resume;

var temp = 0;
var temp2 = 0;
var lives = 3;
var Srdce1;
var Srdce2;
var Srdce3;
var timedEvent;
var scoreField = [];
var spawn = 0;

var toX;
var toY;
var fromX;
var fromY;
var finder;
var grid;
// trida scena, rozsiruje PhaserScene a musi se exportovat
export class PlayScene extends Phaser.Scene {
    constructor() {
        super({
            key: "PlayScene",   // vstupni data
        })
    }
    init(data) {




    }

    preload() { // funkce ve ktere se nactou obrazky a zvuky ze souboru assets pro vsechny sceny

        this.load.tilemapTiledJSON("map", "./assets/Tilemaps/map.json")
        this.load.image("terrain", "./assets/Tilesets/BlokyF.png")


    }

    create() {
        lives = 3;
        bonusF = false;
        coinScore = 0;
        level = 1;
        temp = 0;
        temp2 = 0;
        spawn = 0;

        function getTileID(x, y) {
            var tile = map.getTileAt(x, y);
            return tile.index;
        };

        function collectCoin(PacMan, coin) {
            coin.destroy(coin.x, coin.y);
            coinScore++;
            text.setText(`Nickname: ${localStorage.getItem("playerName")}   Score: ${coinScore}`)

            return false;
        }
        function collectBonus(PacMan, bonus) {
            bonus.destroy(bonus.x, bonus.y);
            bonusF = true;
            RedGhost.setTexture("BlackGhost");
            PurpleGhost.setTexture("BlackGhost");
            GreenGhost.setTexture("BlackGhost");
            GreyGhost.setTexture("BlackGhost");
            timedEvent = this.time.delayedCall(3000, waitEvent, [], this);
            function waitEvent() {
                RedGhost.setTexture("RedGhost");
                PurpleGhost.setTexture("PurpleGhost");
                GreenGhost.setTexture("GreenGhost");
                GreyGhost.setTexture("GreyGhost");
                bonusF = false;
                temp2 = 0;
            }


            return false;
        }
        function damageR() {
            if (bonusF === false) {

                PacMan.setVelocityX(0)
                PacMan.setVelocityY(0)
                PacMan.x = 656
                PacMan.y = 560

                RedGhost.x = 656
                RedGhost.y = 304

                PurpleGhost.x = 592
                PurpleGhost.y = 400

                GreyGhost.x = 640
                GreyGhost.y = 464

                GreenGhost.x = 688
                GreenGhost.y = 400
                lives = lives - 1;
                
                spawn = 0;
           
                return false;
            }
            else {
                var test = lives;
                RedGhost.x = 646
                RedGhost.y = 400
                timedEvent = this.time.delayedCall(3000, respawnEvent, [], this);
                function respawnEvent() {
                    if(lives === test) {
                    RedGhost.x = 656
                    RedGhost.y = 304
                    }
                    temp2 = 0;
                
                }


            }
        }
        function damageG() {
            if (bonusF === false) {

                PacMan.setVelocityX(0)
                PacMan.setVelocityY(0)
                PacMan.x = 656
                PacMan.y = 560

                RedGhost.x = 656
                RedGhost.y = 304

                PurpleGhost.x = 592
                PurpleGhost.y = 400

                GreyGhost.x = 640
                GreyGhost.y = 464

                GreenGhost.x = 688
                GreenGhost.y = 400
                lives = lives - 1;
                spawn = 0;
                return false;
            }
            else {
                var test = lives;
                GreenGhost.x = 688
                GreenGhost.y = 400
                var timedEvent = this.time.delayedCall(3000, respawnEvent, [], this);
                function respawnEvent() {
                    if(lives === test) {
                    GreenGhost.x = 1232;
                    GreenGhost.y = 464;
                    }
                }
            }
        }
        function damageP() {
            if (bonusF === false) {

                PacMan.setVelocityX(0)
                PacMan.setVelocityY(0)
                PacMan.x = 656
                PacMan.y = 560

                RedGhost.x = 656
                RedGhost.y = 304

                PurpleGhost.x = 592
                PurpleGhost.y = 400

                GreyGhost.x = 640
                GreyGhost.y = 464

                GreenGhost.x = 688
                GreenGhost.y = 400
                lives = lives - 1;
                spawn = 0;
                return false;
            }
            else {
                var test = lives;
                PurpleGhost.x = 592
                PurpleGhost.y = 400

                var timedEvent1 = this.time.delayedCall(3000, respawnEvent1, [], this);
                function respawnEvent1() {
                    if(lives === test) {
                    PurpleGhost.x = 48;
                    PurpleGhost.y = 464;
                    }

                }

            }
        }
        function damageGrey() {
            if (bonusF === false) {

                PacMan.setVelocityX(0)
                PacMan.setVelocityY(0)
                PacMan.x = 656
                PacMan.y = 560

                RedGhost.x = 656
                RedGhost.y = 304

                PurpleGhost.x = 592
                PurpleGhost.y = 400

                GreyGhost.x = 640
                GreyGhost.y = 464

                GreenGhost.x = 688
                GreenGhost.y = 400
                lives = lives - 1;
                spawn = 0;
                return false;
            }
            else {
                var test = lives;
                GreyGhost.x = 640
                GreyGhost.y = 464
                var timedEvent2 = this.time.delayedCall(3000, respawnEvent2, [], this);
                function respawnEvent2() {
                    if(lives === test) {
                    GreyGhost.x = 656;
                    GreyGhost.y = 848;
                    }
                }

            }
        }



        keys = this.input.keyboard.addKeys("W,Q,E,A,D,S");
        esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

        map = this.add.tilemap("map");

        terrain = map.addTilesetImage("Bloky", "terrain")

        topLayer = map.createStaticLayer("top", [terrain], 0, 0).setDepth(-1)




        Srdce1 = this.add.image(1000, 15, 'Srdce');
        Srdce2 = this.add.image(1050, 15, 'Srdce');
        Srdce3 = this.add.image(1100, 15, 'Srdce');

        CoinLayer = map.getObjectLayer('points')['objects'];


        coins = this.physics.add.staticGroup()
        CoinLayer.forEach(object => {
            let obj = coins.create(object.x + 16, object.y - 16, "coin");
            obj.setScale(0.5)
            obj.body.width = object.width;
            obj.body.height = object.height;
        });
        BonusLayer = map.getObjectLayer('bonus')['objects'];

        bonus = this.physics.add.staticGroup()
        BonusLayer.forEach(object => {
            let obj = bonus.create(object.x + 16, object.y - 16, "bonus");
            obj.setScale(0.5)
            obj.body.width = object.width;
            obj.body.height = object.height;
        });

        PacMan = this.physics.add.image(656, 560, 'PacMan');
        RedGhost = this.physics.add.image(656, 304, 'RedGhost');
        GreenGhost = this.physics.add.image(688, 400, 'GreenGhost');
        PurpleGhost = this.physics.add.image(592, 400, 'PurpleGhost');
        GreyGhost = this.physics.add.image(640, 464, 'GreyGhost');
        topLayer.setCollisionByProperty({ collide: true });

        this.physics.add.collider(PacMan, topLayer);
        this.physics.add.collider(RedGhost, topLayer);



        PacMan.setCollideWorldBounds(false);
        RedGhost.setCollideWorldBounds(true);

        this.physics.add.overlap(PacMan, coins, collectCoin, null, this);
        this.physics.add.overlap(PacMan, bonus, collectBonus, null, this);

        this.physics.add.overlap(PacMan, RedGhost, damageR, null, this);
        this.physics.add.overlap(PacMan, GreyGhost, damageGrey, null, this);
        this.physics.add.overlap(PacMan, GreenGhost, damageG, null, this);
        this.physics.add.overlap(PacMan, PurpleGhost, damageP, null, this);


        var easystarjs = require('easystarjs');
        var easystar = new easystarjs.js();
        finder = easystar;
        grid = [];

        for (var y = 0; y < map.height; y++) {
            var col = [];
            for (var x = 0; x < map.width; x++) {
                col.push(getTileID(x, y));
            }
            grid.push(col);
        }
        finder.setGrid(grid);

        var tileset = map.tilesets[0];
        var properties = tileset.tileProperties;
        var acceptableTiles = [];

        for (var i = tileset.firstgid - 1; i < 1120; i++) {
            if (!properties.hasOwnProperty(i)) {

                acceptableTiles.push(i + 1);
                continue;
            }
            if (!properties[i].collide) acceptableTiles.push(i + 1);
        }
        finder.setAcceptableTiles(acceptableTiles);



        text = this.add.text(100, 10, `Nickname: ${localStorage.getItem("playerName")}   Score: ${coinScore}`, {
            fontSize: '20px',
            fill: '#ffa500'
        });
        text.setScrollFactor(0);


        var text2 = this.add.text(900, 10, `Lives:`, {
            fontSize: '20px',
            fill: '#ff0000'
        });
        text2.setScrollFactor(0);


    }

    update() { // funkce, ktera updatuje scenu
        if (lives === 2) {

            Srdce3.visible = false
        }
        if (lives === 1) {

            Srdce2.visible = false;
        }
        if (lives === 0) {

            Srdce1.visible = false;
            var text3 = this.add.text(325, 100, `Game Over :(`, {
                fontSize: '80px',
                fill: '#ff0000'
            });
            text3.setScrollFactor(0);
            timedEvent = this.time.delayedCall(3000, loseEvent, [], this);
            function loseEvent() {
                // nacteni skore a pridani nove serazeneho skore do pameti browseru
                var testObject = JSON.parse(localStorage.getItem("score"));
                if (testObject !== null) {
                    scoreField = JSON.parse(localStorage.getItem("score"));
                }
                var scoreObject = {
                    playerName: localStorage.getItem("playerName"),
                    score: coinScore,
                };
                if (scoreField === null || scoreField === undefined) {
                    scoreField[0] = scoreObject;
                }
                else {
                    scoreField.push(scoreObject);


                    var length = scoreField.length;
                    for (var i = (length - 1); i >= 0; i--) {
                        for (var j = (length - i); j > 0; j--) {
                            if (scoreField[j] === undefined) {
                                break;
                            }
                            if (scoreField[j].score > scoreField[j - 1].score) {

                                var tmp = scoreField[j];
                                scoreField[j] = scoreField[j - 1];
                                scoreField[j - 1] = tmp;

                            }
                        }
                    }
                }

                localStorage.setItem("score", JSON.stringify(scoreField));
                coinScore = 0;

                this.scene.stop();
                this.scene.launch("MenuScene");


            }
        }
        if (spawn === 0) {
            timedEvent = this.time.delayedCall(3000, spawn1Event, [], this);
            function spawn1Event() {
                PurpleGhost.x = 48;
                PurpleGhost.y = 464;

            }
            timedEvent = this.time.delayedCall(6000, spawn2Event, [], this);
            function spawn2Event() {
                GreenGhost.x = 1232;
                GreenGhost.y = 464;

            }
            timedEvent = this.time.delayedCall(9000, spawn3Event, [], this);
            function spawn3Event() {
                GreyGhost.x = 656;
                GreyGhost.y = 848;
            }
            spawn = 1;
        }
        if (coinScore === 159) {
            var text3 = this.add.text(230, 100, `You won this level!`, {
                fontSize: '80px',
                fill: '#ff0000'
            });
            text3.setScrollFactor(0);
            timedEvent = this.time.delayedCall(3000, winEvent, [], this);
            function winEvent() {

                // nacteni skore a pridani nove serazeneho skore do pameti browseru
                var testObject = JSON.parse(localStorage.getItem("score"));
                if (testObject !== null) {
                    scoreField = JSON.parse(localStorage.getItem("score"));
                }
                var scoreObject = {
                    playerName: localStorage.getItem("playerName"),
                    score: coinScore,
                };
                if (scoreField === null || scoreField === undefined) {
                    scoreField[0] = scoreObject;
                }
                else {
                    scoreField.push(scoreObject);


                    var length = scoreField.length;
                    for (var i = (length - 1); i >= 0; i--) {
                        for (var j = (length - i); j > 0; j--) {
                            if (scoreField[j] === undefined) {
                                break;
                            }
                            if (scoreField[j].score > scoreField[j - 1].score) {

                                var tmp = scoreField[j];
                                scoreField[j] = scoreField[j - 1];
                                scoreField[j - 1] = tmp;

                            }
                        }
                    }
                }

                localStorage.setItem("score", JSON.stringify(scoreField));
                coinScore = 0;

                this.scene.stop();
                this.scene.launch("MenuScene");

            }
        }


        if (temp2 === 72) {

            toX = Math.floor(PacMan.x / 32);
            toY = Math.floor(PacMan.y / 32);
            fromX = Math.floor(RedGhost.x / 32);
            fromY = Math.floor(RedGhost.y / 32);
            finder.findPath(fromX, fromY, toX, toY, function (path) {
                if (path === null) {

                } else {
                    if (bonusF === false) {
                        RedGhost.x = Math.floor(path[1].x * 32) + 16;
                        RedGhost.y = Math.floor(path[1].y * 32) + 16;
                        temp2 = 0;
                    }

                }
            });
        }
        finder.calculate();
        temp2 = temp2 + 1;


        if (PacMan.x > 1270) {
            PacMan.x = 10
        }
        if (PacMan.x < 10) {
            PacMan.x = 1270
        }

        if ((keys.W.isDown || keys.S.isDown || keys.A.isDown || keys.D.isDown)) {

            PacMan.setTexture("PacMan");

            if (keys.W.isDown) {


                temp = temp + 1;
                if (temp % 60 == 0) {

                    PacMan.x = (Math.floor(PacMan.x / 16)) * 16;

                    if (Math.floor(PacMan.x) % 32 == 0) {
                        PacMan.x = PacMan.x - 16;
                    }


                    temp = 0;
                }

                PacMan.setVelocityY(-400);
                PacMan.angle = 270;

            }
            else if (keys.S.isDown) {

                temp = temp + 1;
                if (temp % 60 == 0) {

                    PacMan.x = (Math.floor(PacMan.x / 16)) * 16;

                    if (Math.floor(PacMan.x) % 32 == 0) {
                        PacMan.x = PacMan.x - 16;
                    }


                    temp = 0;
                }


                PacMan.setVelocityY(+400);
                PacMan.angle = 90;





            }
            if (keys.A.isDown) {

                temp = temp + 1;
                if (temp % 60 == 0) {

                    PacMan.y = (Math.floor(PacMan.y / 16)) * 16;

                    if (Math.floor(PacMan.y) % 32 == 0) {
                        PacMan.y = PacMan.y - 16;
                    }


                    temp = 0;
                }

                PacMan.setVelocityX(-400);
                PacMan.angle = 0;
                PacMan.setTexture("PacMan2");
            }
            else if (keys.D.isDown) {
                temp = temp + 1;
                if (temp % 60 == 0) {

                    PacMan.y = (Math.floor(PacMan.y / 16)) * 16;

                    if (Math.floor(PacMan.y) % 32 == 0) {
                        PacMan.y = PacMan.y - 16;
                    }


                    temp = 0;
                }

                PacMan.setVelocityX(400);
                PacMan.angle = 0;


            }

        }


        if (Phaser.Input.Keyboard.JustDown(esc)) {
            this.scene.pause();
            this.scene.launch("PauseScene", { level: level, coinScore: coinScore });
            //      music.pause();
            keys.W.isDown = false;
            keys.A.isDown = false;
            keys.S.isDown = false;
            keys.D.isDown = false;

            resume = true;
        }


    }
}