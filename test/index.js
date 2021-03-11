var element = document.querySelector(".carte-chat.endroit");

function setup() {
    element.addEventListener("transitionend", loopTransition, false);

}
setup();