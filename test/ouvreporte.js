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
    window.location.href = "frigo.html";
}