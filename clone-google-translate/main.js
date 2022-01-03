function load() {
    var leftSlide = document.getElementById("leftSlide");
    leftSlide.classList.toggle("slide");

    var apps = document.getElementById("appsId");
    apps.classList.remove("slidea");

    var account = document.getElementById("account");
    account.classList.remove("slideac");
}

function drop() {
    var apps = document.getElementById("appsId");
    apps.classList.toggle("slidea");

    var leftSlide = document.getElementById("leftSlide");
    leftSlide.classList.remove("slide");

    var account = document.getElementById("account");
    account.classList.remove("slideac");
}

function dropAcount() {
    var account = document.getElementById("account");
    account.classList.toggle("slideac");

    var leftSlide = document.getElementById("leftSlide");
    leftSlide.classList.remove("slide");

    var apps = document.getElementById("appsId");
    apps.classList.remove("slidea");
}



window.onclick = function(event) {
    var apps = document.getElementById("appsId");
    if(!event.target.matches(".dots")){
        apps.classList.remove("slidea");
    }

    var leftSlide = document.getElementById("leftSlide");
    if(!event.target.matches(".bars")){
        leftSlide.classList.remove("slide");
    }

    var account = document.getElementById("account");
    if(!event.target.matches(".pic")){
        account.classList.remove("slideac");
    }   
}