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
  document.getElementById(tabName).style.display = "block";

  evt.currentTarget.className += " active";
}

function popup(popupNumber) {
  var popup = document.getElementById(popupNumber);
  popup.className += " show";
}

setTimeout(popup, 1000, "popup1");

function closepopup(popupNumber) {
  var popup = document.getElementById(popupNumber);
  popup.className += " close";
}

document.getElementById("beginButton").addEventListener("click", function () {
  closepopup("popup1");
  setTimeout(popup, 1000, "popup2");
  setTimeout(closepopup, 4000, "popup2");
  setTimeout(popup, 5500, "popup3");
  setTimeout(enablegame, 8500, "Game_1");
  setTimeout(closepopup, 9000, "popup3")
});

function enablegame(game_number) {
  document.getElementById(game_number).disabled = false;
}

function disablegame(game_number) {
  document.getElementById(game_number).disabled = true;
}

document.getElementById("Game_1").addEventListener("click", function () {
  setTimeout(popup, 500, "mazePopup");
})

document.getElementById("mazeEndButton").addEventListener("click", function () {
  backHome();
  disablegame("Game_1");
  enablegame("Game_2");
})

document.getElementById("mazeTAButton").addEventListener("click", function () {
  console.log("try again");
})

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

//this part is just for milestone submission, please change!!!
document.getElementById("game1resetButton").addEventListener("click", function () {
  backHome();
})

document.getElementById("game2resetButton").addEventListener("click", function () {
  backHome();
  //document.getElementById("Game_1").className += " active";
  disablegame("Game_2");
  enablegame("Game_3");
})

document.getElementById("game3resetButton").addEventListener("click", function () {
  backHome();
  //document.getElementById("Game_1").className += " active";
  //document.getElementById("Game_2").className += " active";
  disablegame("Game_3");
})

let gameCounter = ["fail", "fail", "fail"];
