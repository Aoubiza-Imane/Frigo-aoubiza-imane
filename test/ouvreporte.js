//=================ANIMATIONS ET ESTHETIQUE==========================


//animation porte qui s'ouvre
var element = document.querySelector(".porte");
element.addEventListener("click", toggleDoor);

//Audio pour l'ouverture de la porte



function toggleDoor() {
    element.classList.toggle("porteOuverte");
    setTimeout(function() { hideFridge() }, 3000);
}


//cacher le frigo pour accéder à l'intérieur
function hideFridge() {
    document.getElementsByClassName("porte")[0].style.display = 'none';
    document.getElementsByClassName("derriereporte")[0].style.display = 'none'; //inherit pour afficher
    // document.getElementById("boutons").style.display = 'initial';
    // document.getElementsByClassName("rectangle1").style.display = 'initial';
    window.location.href = "frigo.html";
    // addElements();
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