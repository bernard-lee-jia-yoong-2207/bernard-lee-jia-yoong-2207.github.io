//this code references photohunt-frontend by traciemasek on GitHub with some modification

let sceneImgSrc;

const photoContainer = document.getElementById("photoContainer");
const diffFooter = document.getElementById("footerCounter");
const itemList = document.getElementById("itemList")

let correctCount = 0;

let diffStartingMin;
let diffTime;
let diffStoppingTime;

let diffBackButton = document.getElementById("game2resetButton")

//correct circles to be placed
let sceneHTML = `
    <div id="circle1L" class="diffCircle"></div>
    <div id="circle1R" class="diffCircle"></div>
    <div id="circle2L" class="diffCircle"></div>
    <div id="circle2R" class="diffCircle"></div>
    <div id="circle3L" class="diffCircle"></div>
    <div id="circle3R" class="diffCircle"></div>
    <div id="circle4L" class="diffCircle"></div>
    <div id="circle4R" class="diffCircle"></div>
    <div id="circle5L" class="diffCircle"></div>
    <div id="circle5R" class="diffCircle"></div>
    <div id="circle6L" class="diffCircle"></div>
    <div id="circle6R" class="diffCircle"></div>
`
//function to reset find the difference game
function resetDiff() {
    document.getElementById("diffTimer").innerHTML = "1:00";
    disableButton("game2resetButton")
    setTimeout(popup, 500, "diffPopup");
    let startButton = document.getElementById("diffStartButton");
    startButton.addEventListener("click", function () {
        enableButton("game2resetButton")
        closepopup("diffPopup");
        diffTimer();
    }, { once: true })
    correctCount = 0;
    newCounterCircles();
    setScene();
    newItemList();
}

//function to place new counters in the footer
function newCounterCircles() {
    diffFooter.innerHTML = `
        <div class="counterCircles" id="counterCircle1">X</div>
        <div class="counterCircles" id="counterCircle2">X</div>
        <div class="counterCircles" id="counterCircle3">X</div>
        <div class="counterCircles" id="counterCircle4">X</div>
        <div class="counterCircles" id="counterCircle5">X</div>
        <div class="counterCircles" id="counterCircle6">X</div>
    `
}

//function to renew the list of items
function newItemList() {
    itemList.innerHTML = `
        <span><strong><u>items:</u></strong></span><br>
        <span class="item" id="water">water</span><br>
        <span class="item" id="compass">compass</span><br>
        <span class="item" id="lighter">lighter</span><br>
        <span class="item" id="snack bar">snack bar</span><br>
        <span class="item" id="apple">apple</span><br>
        <span class="item" id="dagger">dagger</span>
    `
}

//function to place the picture
function setScene() {
    photoContainer.innerHTML = `
        <img src="./resources/scene.png" class="diffPic" id="scene">
        ${sceneHTML}
    `;
}

//function to run timer
function diffTimer() {
    diffStartingMin = 59 / 60;
    diffTime = diffStartingMin * 60;
    diffStoppingTime = 0;

    diffTimerId = setInterval(function () {
        const diffTimerEl = document.getElementById("diffTimer");
        const diffMins = Math.floor(diffTime / 60);
        let diffSeconds = diffTime % 60;

        diffSeconds = diffSeconds < 10 ? '0' + diffSeconds : diffSeconds;

        diffTimerEl.innerHTML = diffMins + ":" + diffSeconds;

        //stops the timer when the number of seconds reaches 0
        if (diffTime == diffStoppingTime) {
            clearInterval(diffTimerId);
            diffTimesUp();
        }

        //listener for back button
        diffBackButton.addEventListener("click", function () {
            backHome();
            clearInterval(diffTimerId);
        }, { once: true })

        diffTime--;

        diffTime = diffTime < 0 ? 0 : diffTime;
    }, 1000)
    return
}

//function to stop and reset find the difference game when player fails to finish within time limit 
function diffTimesUp() {
    popup("diffPopupFail");
    const TAButton = document.getElementById("diffTAButton");
    TAButton.addEventListener("click", function () {
        closepopup("diffPopupFail");
        resetDiff();
    })
}

//function to check whether user clicked on the correct item
photoContainer.addEventListener("click", event => {
    if (event.target.className === "diffCircle") {
        let targetId = event.target.id;
        let targetDiv = document.getElementById(targetId);
        console.log(targetId);
        let correspondingDiv;
        let correspondingId;
        if (targetId.includes("L")) {
            correspondingId = targetId.replace("L", "R")
            correspondingDiv = document.getElementById(correspondingId)
        } else {
            correspondingId = targetId.replace("R", "L")
            correspondingDiv = document.getElementById(correspondingId)
        }
        targetDiv.className = "circle";
        correspondingDiv.className = "circle";
        targetDiv.innerHTML = `<img class = "circle" src="./resources/green_circle.png">`
        correspondingDiv.innerHTML = `<img class = "circle" src="./resources/green_circle.png">`

        //counter at bottom
        correctCount++;
        let currentCircle = document.getElementById(`counterCircle${correctCount}`)
        currentCircle.innerHTML = "✔"
        currentCircle.className += " green"

        //if winner wins the round
        if (correctCount === 6) {
            clearInterval(diffTimerId);
            popup("diffPopupSuccess")
        }

        //strike through the corresponding item on the item list
        let itemId;
        if (targetId.includes("1")) {
            itemId = document.getElementById("compass");
            itemId.className += " found";
            console.log(itemId.className)
        }
        if (targetId.includes("2")) {
            itemId = document.getElementById("water");
            itemId.className += " found";
            console.log(itemId.className)
        }
        if (targetId.includes("3")) {
            itemId = document.getElementById("lighter");
            itemId.className += " found";
            console.log(itemId.className)
        }
        if (targetId.includes("4")) {
            itemId = document.getElementById("dagger");
            itemId.className += " found";
            console.log(itemId.className)
        }
        if (targetId.includes("5")) {
            itemId = document.getElementById("apple");
            itemId.className += " found";
            console.log(itemId.className)
        }
        if (targetId.includes("6")) {
            itemId = document.getElementById("snack bar");
            itemId.className += " found";
            console.log(itemId.className)
        }
    }
})