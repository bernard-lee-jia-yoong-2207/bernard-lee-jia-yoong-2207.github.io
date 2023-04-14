//function to switch tabs adopted from W3Schools
function openGame(evt, tabName) {
  var i, tabcontent, tablinks, defaultContent;

  defaultContent = document.getElementsByClassName("defaultContent");
  for (i = 0; i < defaultContent.length; i++) {
    defaultContent[i].style.display = "none";
  }

  tabcontent = document.getElementsByClassName("gameContainer");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].style.display = "none";
  }

  //start/reset maze game when game 1 button is clicked
  if (tabName === "mazeGame") {
    resetMaze();
  }

  //start/reset find the difference game when game 2 button is clicked
  if (tabName === "diffGame") {
    resetDiff();
  }

  //start/reset hangman game when game 3 button is clicked
  if (tabName === "manGame") {
    resetMan();
  }

  document.getElementById(tabName).style.display = "block";

  evt.currentTarget.className += " active";
}

//function to return to main map
function backHome() {
  var i, tabcontent, tablinks, defaultContent;

  defaultContent = document.getElementsByClassName("defaultContent");
  for (i = 0; i < defaultContent.length; i++) {
    defaultContent[i].style.display = "block";
  }

  tabcontent = document.getElementsByClassName("gameContainer");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.display = "block";
  }
}

//functions to open and close popups
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

//functions to enable and disable game/back buttons
function enableButton(buttonId) {
  document.getElementById(buttonId).disabled = false;
}

function disableButton(buttonId) {
  document.getElementById(buttonId).disabled = true;
}

//popup to begin the game
setTimeout(popup, 500, "popup1");
document.getElementById("beginButton").addEventListener("click", function () {
  closepopup("popup1");
  setTimeout(popup, 1000, "popup2");
  setTimeout(closepopup, 4000, "popup2");
  setTimeout(popup, 5500, "popup3");
  setTimeout(enableButton, 8500, "Game_1");
  setTimeout(closepopup, 9000, "popup3");
});

//listeners for the end buttons for each game
document.getElementById("mazeEndButton").addEventListener("click", function () {
  backHome();
  disableButton("Game_1");
  enableButton("Game_2");
})

document.getElementById("diffEndButton").addEventListener("click", function () {
  backHome();
  disableButton("Game_2");
  enableButton("Game_3");
})

document.getElementById("manEndButton").addEventListener("click", function () {
  backHome();
  disableButton("Game_3");
  setTimeout(popup, 500, "finalPopup")
})

//listener and embed video function for the treasure chest image in the final popup
document.getElementById("treasureChestImage").addEventListener("click", openChest)

function openChest() {
  closepopup("finalPopup");
  popup("videoPopup");
  let videoHolder = document.getElementById("videoHolder");
  videoHolder.innerHTML = `
    <video id = "chestVideo" width="636" height="458">
      <source src = "./resources/treasure_chest_video.mp4" type = "video/mp4">
    </video>
  `
  document.getElementById("chestVideo").play();
  setTimeout(popup, 7500, "chestPopup");
}

//listener to restart the game by reloading the website
document.getElementById("replayButton").addEventListener("click", function () {
  window.location.reload();
})