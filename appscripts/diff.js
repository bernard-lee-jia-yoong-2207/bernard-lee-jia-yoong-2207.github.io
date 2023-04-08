let sceneImgSrc;

const photoContainer = document.getElementById("photo-container");
const diffFooter = document.getElementById("footer-counter");

let correctCount = 0;

let diffStartingMin;
let diffTime;
let diffStoppingTime;
let diffBackButton = document.getElementById("game2resetButton")

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

function popup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.remove("close");
    popup.classList.toggle("show");
}

function closepopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.remove("show");
    popup.classList.toggle("close");
}

function resetDiff() {
    //reset game here
    setTimeout(popup, 500, "diffPopup");
    let startButton = document.getElementById("diffStartButton");
    startButton.addEventListener("click", function () {
        closepopup("diffPopup");
        diffTimer();
    }, { once: true })
    correctCount = 0;
    startGame();
}

function startGame() {
    newCounterCircles();
    setScene();
    let diffStartButton
}

function newCounterCircles() {
    diffFooter.innerHTML = `
        <div class="counterCircles" id="counterCircle1"> </div>
        <div class="counterCircles" id="counterCircle2"> </div>
        <div class="counterCircles" id="counterCircle3"> </div>
        <div class="counterCircles" id="counterCircle4"> </div>
        <div class="counterCircles" id="counterCircle5"> </div>
        <div class="counterCircles" id="counterCircle6"> </div>
    `
}

function setScene() {
    photoContainer.innerHTML = `
        <img src="./resources/left.png" class="diffPic" id="leftPic">
        <img src="./resources/right.png" class="diffPic" id="rightPic">
        ${sceneHTML}
    `;
}

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
            timesUp();
        }

        diffBackButton.addEventListener("click", function () {
            clearInterval(diffTimerId);
        })

        diffTime--;

        diffTime = diffTime < 0 ? 0 : diffTime;
    }, 1000)
    return
}

function timesUp() {
    clearInterval(diffTimerId);
    startingMin = 59 / 60;
    time = startingMin * 60;
    stoppingTime = 0;
    popup("diffPopupFail");
    const TAButton = document.getElementById("diffTAButton");
    TAButton.addEventListener("click", function () {
        closepopup("diffPopupFail");
        resetDiff();
    })
}

//continue from photoclick