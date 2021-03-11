//animation ouverture porte
var element = document.querySelector(".derrierePorte");
element.addEventListener("click", disappear);

function disappear() {
    element.style.display = none;
}