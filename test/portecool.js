//=================ANIMATIONS ET ESTHETIQUE==========================

//initialisation --> éléments cachés
document.getElementById("boutons").style.display = 'none';

//animation porte qui s'ouvre
var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);



function toggleDoor() {
    element.classList.toggle("doorOpen");
    setTimeout(function() { hideFridge() }, 3000);
}


//cacher le frigo pour accéder à l'intérieur
function hideFridge() {
    document.getElementsByClassName("door")[0].style.display = 'none';
    document.getElementsByClassName("backDoor")[0].style.display = 'none'; //inherit pour afficher
    document.getElementById("boutons").style.display = 'inherit';
}

// // //background épileptique, à appeler en faisant animateBg(0);
function animateBg(i) {
    document.body.style.backgroundColor = 'hsl(' + i + ', 100%, 50%)';
    setTimeout(function() {
        animateBg(++i)
    }, i);
}


//===========AUDIO==========
// var audio = new Audio('01 LOVE ME RIGHT.mp3');
// audio.play();

//==========METHODES HTTP=====================