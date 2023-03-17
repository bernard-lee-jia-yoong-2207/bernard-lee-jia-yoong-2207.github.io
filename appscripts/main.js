function openTab(evt, tabName) {
    var i, tabcontent, tablinks, defaultContent;
    
    defaultContent = document.getElementsByClassName("defaultContent");
    for(i=0; i < defaultContent.length; i++) {
        defaultContent[i].style.display = "none";
    }

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
