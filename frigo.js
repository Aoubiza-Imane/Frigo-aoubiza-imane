//animation ouverture porte
var ouverture = document.querySelector(".porte");
ouverture.addEventListener("click", toggleDoor);

function toggleDoor() {
    ouverture.classList.toggle("porteOuverte");
}