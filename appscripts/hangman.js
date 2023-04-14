//this code references JavaScript Hangman Game by Cathy Dutton on codepen with some modification

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var slot;
var word;
var guessedLetters = [];
var space;
var lives;
var counter;

let manBackButton = document.getElementById("game3resetButton")

//function to create all the letter buttons
function buttons() {
    manButtons = document.getElementById("manButtons");
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        manButtons.appendChild(letters);
        letters.appendChild(list);
    }
}

//function to place the slots and check whether user pressed the correct letter
function result() {
    wordHolder = document.getElementById("manWordSpace")
    correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'myWord');
        slot = document.createElement('li');
        slot.setAttribute('class', 'slot');
        if (word[i] === '-') {
            slot.innerHTML = "-";
            space += 1;
        } else {
            slot.innerHTML = "_";
        }
        guessedLetters.push(slot);
        wordHolder.appendChild(correct);
        correct.appendChild(slot);
    }
}

//function to check which line to draw
function animate() {
    var drawMe = lives;
    drawArray[drawMe]();
}

//function to draw on canvas
function canvas() {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#000";
    context.linewidth = 2;
};

//function to draw the head of the hangman
function head() {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
}

//function to draw the rest of the hangman
function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
}

frame1 = function () {
    draw(0, 150, 150, 150);
};

frame2 = function () {
    draw(10, 0, 10, 600);
};

frame3 = function () {
    draw(0, 5, 70, 5);
};

frame4 = function () {
    draw(60, 5, 60, 15);
};

torso = function () {
    draw(60, 36, 60, 70);
};

rightArm = function () {
    draw(60, 46, 100, 50);
};

leftArm = function () {
    draw(60, 46, 20, 50);
};

rightLeg = function () {
    draw(60, 70, 100, 100);
};

leftLeg = function () {
    draw(60, 70, 20, 100);
};

drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];

//function to check the number of guesses made
function check() {
    list.onclick = function () {
        var slot = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
            if (word[i] === slot) {
                guessedLetters[i].innerHTML = slot;
                counter += 1;
            }
        }
        var j = (word.indexOf(slot));
        if (j === -1) {
            lives -= 1;
            checkLives();
            animate();
        } else {
            checkLives();
        }
    }
}

//function to check how many lives the user has left
function checkLives() {
    if (lives < 1) {
        //clearInterval(manTimerId);
        //popup("manPopupFail");
        manTimesUp();
    }
    if (counter + space === guessedLetters.length) {
        popup("manPopupSuccess");
        clearInterval(manTimerId);
    }
}

//function to place all the things needed to begin the game
function startMan() {
    word = "two-thousand-two-hundred-and-seven"
    buttons();

    guessedLetters = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    canvas();
}

//function to reset the game
function resetMan() {
    //reset game here
    document.getElementById("manTimer").innerHTML = "1:00";
    disableButton("game3resetButton");
    let wordSpace = document.getElementById("manWordSpace");
    while (wordSpace.hasChildNodes()) {
        wordSpace.removeChild(wordSpace.firstChild);
    }
    let buttons = document.getElementById("manButtons");
    while (buttons.hasChildNodes()) {
        buttons.removeChild(buttons.firstChild);
    }
    setTimeout(popup, 500, "manPopup");
    let startButton = document.getElementById("manStartButton");
    startButton.addEventListener("click", function () {
        enableButton("game3resetButton");
        closepopup("manPopup");
        manTimer();
    }, { once: true })
    startMan();
}

//function to run a timer
function manTimer() {
    manStartingMin = 59 / 60;
    manTime = manStartingMin * 60;
    manStoppingTime = 0;

    manTimerId = setInterval(function () {
        const manTimerEl = document.getElementById("manTimer");
        const manMins = Math.floor(manTime / 60);
        let manSeconds = manTime % 60;

        manSeconds = manSeconds < 10 ? '0' + manSeconds : manSeconds;

        manTimerEl.innerHTML = manMins + ":" + manSeconds;

        //stops the timer when the number of seconds reaches 0
        if (manTime == manStoppingTime) {
            clearInterval(manTimerId);
            manTimesUp();
        }

        manBackButton.addEventListener("click", function () {
            backHome();
            clearInterval(manTimerId);
            context.clearRect(0, 0, 400, 400);
        }, { once: true })

        manTime--;

        manTime = manTime < 0 ? 0 : manTime;
    }, 1000)
    return
}

//function stop and reset the hangman game when player fails to finish within time limit OR within ten tries
function manTimesUp() {
    clearInterval(manTimerId);
    popup("manPopupFail");
    const manTAButton = document.getElementById("manTAButton");
    manTAButton.addEventListener("click", function () {
        closepopup("manPopupFail");
        resetMan();
        context.clearRect(0, 0, 400, 400);
    })   
}