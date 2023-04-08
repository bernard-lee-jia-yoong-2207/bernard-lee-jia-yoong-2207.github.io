function closepopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.remove("show");
    popup.classList.toggle("close");
};

function popup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.remove("close");
    popup.classList.toggle("show");
}

/* document.getElementById("mazeStartButton").addEventListener("click", function () {
    closepopup("mazePopup");
    this.className += " active";
}); */

//this code references js-maze-game-1 by nevkatz on GitHub with some modification

//define details for the current level
let levels = [];

levels[0] = {
    map: [
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], //0 represents a floor, 1 represents a well
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    ],
    player: {
        x: 2,
        y: 28
    },
    goal: {
        x: 26,
        y: 0
    },
};

//build object constructor for game, with parameters id of game container and the level array
function Game(id, level) {
    //capture the game conteiner from HTML
    this.el = document.getElementById(id);

    //define the two types of tile that will be used on the map - floor and wall
    this.tileTypes = ['floor', 'wall'];

    //value that will be used to define the width and height of each tile
    this.tileDim = 18;

    this.map = level.map;

    //copying the player and goal coordinates without changing the value
    this.player = { ...level.player };
    this.goal = { ...level.goal };

    this.player.el = null;
    this.gameOver = false;
}

//object method to insert tile in HTML
Game.prototype.populateMap = function () {
    let tiles = document.getElementById('tiles');
    for (var y = 0; y < this.map.length; ++y) {
        //loop function as long as y coordinate is less than the number of rows
        for (var x = 0; x < this.map[y].length; ++x) {
            //loop function as long as x coordinate is less than the number of tiles per row
            let tileCode = this.map[y][x];
            let tileType = this.tileTypes[tileCode];
            let tile = this.createEl(x, y, tileType);
            //add tiles to the 'tiles' layer in HTML
            tiles.appendChild(tile);
        }
    }
}

//object method to create new tile elements in HTML
Game.prototype.createEl = function (x, y, type) {
    let el = document.createElement('div');

    //define the tile type
    el.className = type;


    el.style.width = el.style.height = this.tileDim + 'px';
    el.style.left = x * this.tileDim + 'px';
    el.style.top = y * this.tileDim + 'px';
    return el;
}

//object method to adjust and correct the size of the map
Game.prototype.sizeUp = function () {
    let map = this.el.querySelector('.mazeMap');
    //defining the dimensions of the entire map
    map.style.height = this.map.length * this.tileDim + 'px';
    //uniform map so width can be as long as the number of items in the first row
    map.style.width = this.map[0].length * this.tileDim + 'px';
}

//object method to place player and goal
Game.prototype.placeSprite = function (type) {
    let x = this[type].x;
    let y = this[type].y;

    //create an element using the coordinates of the player/goal as defined in the level
    let sprite = this.createEl(x, y, type);
    sprite.id = type;

    //make the player/goal round
    sprite.style.borderRadius = this.tileDim + 'px';

    //add player/goal in HTML
    let layer = this.el.querySelector('#sprites');
    layer.appendChild(sprite);
    return sprite;
}

//object method to move the player
Game.prototype.movePlayer = function (event) {

    if (this.gameOver == true) return;

    //make sure that keys other than the arrow keys do not work
    event.preventDefault();
    if (event.keyCode < 37 || event.keyCode > 40) {
        return;
    }

    //use switch case to determine the action for each arrow key
    switch (event.keyCode) {
        case 37:
            this.moveLeft();
            break;

        case 38:
            this.moveUp();
            break;

        case 39:
            this.moveRight();
            break;

        case 40:
            this.moveDown();
            break;
    }
}

//object method to define the action for every key
Game.prototype.moveUp = function () {
    //wiggle if player is on the top row
    if (this.player.y == 0) {
        this.collide();
        return;
    }

    //access the next tile (same x coordinate, y coordinate minus one)
    //if the next tile is a wall, wiggle
    let nextTile = this.map[this.player.y - 1][this.player.x];
    if (nextTile == 1) {
        this.collide();
        return;
    }

    //otherwise move player up one tile
    this.player.y -= 1;
    this.updateVert();
}

Game.prototype.moveDown = function () {
    //wiggle if player is on the bottom row
    //the number of rows may be changed in the level so this.map.length-1 is used instead of an absolute y
    if (this.player.y == this.map.length - 1) {
        this.collide();
        return;
    }

    //access the next tile (same x coordinate, y coordinate plus one)
    //if the next tile is a wall, wiggle
    let nextTile = this.map[this.player.y + 1][this.player.x];
    if (nextTile == 1) {
        this.collide();
        return;
    }

    //otherwise move player down one tile
    this.player.y += 1;
    this.updateVert();
}

//update the top property of the player
//this is used for both moving up and down
Game.prototype.updateVert = function () {
    this.player.el.style.top = this.player.y * this.tileDim + 'px';
}

Game.prototype.moveLeft = function () {
    //wiggle if player is on the leftmost column
    if (this.player.x == 0) {
        this.collide();
        return;
    }

    //access the next tile (x coordinate minus one, same y coordinate)
    //if the next tile is a wall, wiggle
    let nextTile = this.map[this.player.y][this.player.x - 1];
    if (nextTile == 1) {
        this.collide();
        return;
    }

    //otherwise move player left one tile
    this.player.x -= 1;
    this.updateHoriz();
}

Game.prototype.moveRight = function () {
    //wiggle if player is on the rightmost column
    //the number of columns may be changed in the level so this.map[this.player.y].length - 1 is used instead of an absolute x
    if (this.player.x == this.map[this.player.y].length - 1) {
        this.collide();
        return;
    }

    //access the next tile (x coordinate plus one, same y coordinate)
    //if the next tile is a wall, wiggle
    let nextTile = this.map[this.player.y][this.player.x + 1];
    if (nextTile == 1) {
        this.collide();
        return;
    }

    //otherwise move player right one tile
    this.player.x += 1;
    this.updateHoriz();
}

//update the left property of the player
//this is used for both moving left and right
Game.prototype.updateHoriz = function () {
    this.player.el.style.left = this.player.x * this.tileDim + 'px';
}

function myListener(event) {
    //call the movePlayer method when arrow keys are pressed
    myGame.movePlayer(event);

    //check whether the player has reached the goal
    myGame.checkGoal();
}

//add keyboard listenser for keyboard events
Game.prototype.keyboardListener = function () {

    document.removeEventListener('keydown', myListener);
    document.addEventListener('keydown', myListener);
}


Game.prototype.checkGoal = function () {
    //if the coordinates of the player is the same as the pre-defined coordinates of the goal
    //set body's class to 'success'
    let body = document.querySelector('body');
    if (this.player.y == this.goal.y &&
        this.player.x == this.goal.x) {
        this.gameOver = true;
        body.className = "success";
        popup("mazePopupSuccess");
        document.removeEventListener('keydown', myListener)
    }

    //otherwise body's class remains the same
    else {
        body.className = '';
    }
}

//object method to define how the player wiggles
Game.prototype.collide = function () {
    this.player.el.className += ' collide';
    let obj = this;
    //this is so that we can still refer to the game object within the set time out function 
    //otherwise 'this' will refer to the setTimeout function within setTimeout
    window.setTimeout(function () {
        obj.player.el.className = 'player';
    }, 200);
    return 0;
}

let backButton = document.getElementById("game1resetButton")

//function to run timer referncing Florin Pop's 'Simple Countdown Timer with JavaScript - Day 21' on YouTube
const startingMin = 59 / 60;
let time = startingMin * 60;
const stoppingTime = 0;

function timer() {

    var timerId = setInterval(function () {
        const timerEl = document.getElementById("mazeTimer");
        const mins = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerEl.innerHTML = mins + ":" + seconds;

        //stops the timer when the number of seconds reaches 0
        if (time == stoppingTime) {
            myGame.gameOver = true;
            clearInterval(timerId);
            timerId = false;
            popup("mazePopupFail");
            return
        }

        backButton.addEventListener("click", function () {
            clearInterval(timerId);
        })


        if (myGame.gameOver == true) {
            clearInterval(timerId);
        }

        time--;

        time = time < 0 ? 0 : time;
    }, 1000)
    return
}

let TAButton = document.getElementById("mazeTAButton");
TAButton.addEventListener("click", function () {
    closepopup("mazePopupFail");
    resetMaze();
})

function resetMaze() {
    setTimeout(popup, 500, "mazePopup");
    let sprites = document.getElementById("sprites");
    while (sprites.hasChildNodes()) {
        sprites.removeChild(sprites.firstChild);
    }
    let tiles = document.getElementById("tiles");
    while (tiles.hasChildNodes()) {
        tiles.removeChild(tiles.firstChild);
    }
    myGame.player.x = 2;
    myGame.player.y = 28;
    myGame.gameOver = false;
    myGame.populateMap();
    myGame.sizeUp();
    myGame.placeSprite('goal');
    let playerSprite = myGame.placeSprite('player');
    myGame.player.el = playerSprite;
    let startButton = document.getElementById("mazeStartButton");
    startButton.addEventListener("click", function () {
        myGame.keyboardListener();
        time = startingMin * 60;
        timer();
        closepopup("mazePopup");
    }, { once: true });
}

const myGame = new Game('mazeGame', levels[0]);

// problem: the success message disappears when i click any button after reaching goal