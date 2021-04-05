//animation ouverture porte
var ouverture = document.querySelector(".porte");
ouverture.addEventListener("click", toggleDoor);

function toggleDoor() {
    ouverture.classList.toggle("porteOuverte");
}

///////////////////
function addElement() {
    // crée un nouvel élément div
    var newDiv = document.createElement("rectangle");
    // et lui donne un peu de contenu
    var newContent = document.createTextNode('Hi there and greetings!');
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);

    // ajoute le nouvel élément créé et son contenu dans le DOM
    var currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);
}
// document.body.onload = addElements;

//Apparition des boutons et du frigo final
function addElements() {
    var rectangle1 = document.createElement("DIV");
    // rectangle1.id = "rectangle1";
    rectangle1.style.width = "100px";
    rectangle1.style.height = "100px";
    rectangle1.style.background = "red";
    rectangle1.style.color = "white";
    rectangle1.innerHTML = "Hello";
    document.getElementsByTagName("body")[0].appendChild(rectangle1);

    var btn = document.createElement("BUTTON"); // Create a <button> element
    btn.innerHTML = "CLICK ME"; // Insert text
    // btn.style.position = 'center';
    // document.body.appendChild(btn);
    document.getElementsByName("rectangle1")[0].appendChild('btn'); // Append <button> to <body>

    // var ajouter = document.createElement("BUTTON");
    // ajouter.innerHTML = "AJOUTER";
    // document.body.appendChild(ajouter);
}