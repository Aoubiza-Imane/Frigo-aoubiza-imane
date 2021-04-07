//Variables communes aux méthodes

let myHeaders = new Headers;
myHeaders.append("Content-Type", "application/json");
var url = "https://webmmi.iut-tlse3.fr/~jean-marie.pecatte/frigo/public/3/produits";

//masquer le tableau dynamique et ses bordures
document.getElementById("tableauproduits").style.display = 'hidden';
document.getElementById("tableauproduits").style.borderStyle = 'none';

//=======apprentissage=========
// mettre \" \" pour que les " ne soient pas pris en compte #js

//=============Récupérer les produits : Méthode GET========

function afficherAliment() {

    const fetchOptions = {
        method: 'GET',
        headers: myHeaders,
        body: JSON.stringify()
    };
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json(); //récupérer sous format JSON
        })
        .then((dataJSON) => {
            console.log(dataJSON);
            //on vide le tableau 
            tableauproduits.innerHTML = "";
            for (i of dataJSON) {
                //mise en place du tableau dynamique avec suppression des produits
                tableauproduits.innerHTML = tableauproduits.innerHTML +
                    "<div class=\" boutons\"" +
                    "<tr>" +
                    "<td>" + i.nom + "</td>" +
                    "<td>" + i.qte + "</td>" +
                    //on récupère l'id du produit pour le déf en tant qu'id du bouton/formulaire
                    "<td> <input type='button' id='" + i.id + "' class= \"plus\" value='+' name = 'plus' nomproduitplus ='" + i.nom + "' qteproduitplus='" + i.qte + "'/> <td>" +
                    "<td> <input type='button' id='" + i.id + "' class= \"moins\"value='-' name = 'moins' nomproduitmoins ='" + i.nom + "' qteproduitmoins='" + i.qte + "'/>  <td>" + //on récupère l'id du produit pour le déf en tant qu'id du bouton
                    "<td> <input type='button' id='" + i.id + "'class= \"poubelle\"value = '' name='poubelle'/>" +
                    "<td> <input type='text' id='modifnom" + i.id + "' class= \"modifnom\"value='' placeholder ='Modifier le nom' name='modifnom' style=\"width:95px\"/> <td>" +
                    "<td> <input type='number' id='modifnombre" + i.id + "' class= \"modifnombre\"value='' placeholder ='Modifier la quantité' name='modifnombre'style=\"width:135px\"/>  <td>" +
                    "<td> <input type='button' id='" + i.id + "' class= \"modifier\"value='Modifier' name='modifier'/> <td>" +
                    "</tr>" +
                    "</div>"
            }

            //==========LISTENERS=============

            //on crée une liste de rassemblement des boutons Poubelle
            //on ajoute à chacun un listener click avec déclenchement de la fonction boutonsupp
            let listBoutonSup = document.getElementsByName("poubelle");
            for (let boutonind of listBoutonSup) {
                boutonind.addEventListener("click", boutonsup);
            }

            //on crée une liste de rassemblement des boutons modifier
            //on ajoute à chacun un listener click avec déclenchement de la fonction modif
            let listModif = document.getElementsByName("modifier");
            for (let boutonind of listModif) {
                boutonind.addEventListener("click", modif);
            }

            //on crée une liste de rassemblement des boutons plus
            //on ajoute à chacun un listener click avec déclenchement de la fonction ajoutbtn
            let listPlus = document.getElementsByName("plus");
            for (let boutonind of listPlus) {
                boutonind.addEventListener("click", ajoutbtn);
            }

            //on crée une liste de rassemblement des boutons moins
            //on ajoute à chacun un listener click avec déclenchement de la fonction soustrairebtn
            let listMoins = document.getElementsByName("moins");
            for (let boutonind of listMoins) {
                boutonind.addEventListener("click", soustrairebtn);
            }
        })
        .catch((error) => console.log(error));
}

//===========FONCTIONS ASSOCIEES AUX LISTENERS===========//


//fonction déclenchée avec les boutons poubelles
function boutonsup(e) {
    supprimerAliment(e.target.id);
    afficherAliment();
}

//fonction déclenchée avec les boutons modifier

function modif(e) {
    var newname = document.getElementById("modifnom" + e.target.id).value;
    var newqte = document.getElementById("modifnombre" + e.target.id).value;
    modifierAliment(e.target.id, newname, newqte);
    afficherAliment();
}

//fonction déclenchée avec les boutons plus

function ajoutbtn(e) {
    var qteproduit = Number.parseInt(e.target.attributes.qteproduitplus.value) + 1;
    var nomproduit = e.target.attributes.nomproduitplus.value;
    modifierAliment(e.target.id, nomproduit, qteproduit);
    afficherAliment();

}

//fonction déclenchée avec les boutons moins

function soustrairebtn(e) {
    qteproduit = Number.parseInt(e.target.attributes.qteproduitmoins.value);
    var nomproduit = e.target.attributes.nomproduitmoins.value;
    if (qteproduit <= 1) {
        supprimerAliment(e.target.id);
    } else qteproduit = qteproduit - 1;
    modifierAliment(e.target.id, nomproduit, qteproduit);
    afficherAliment();
}


//Afficher les produits dans le frigo  avec le bouton " Afficher les produits"
document.getElementById("afficherlesproduits").onclick = function() {
    afficherAliment();
    document.getElementById("tableauproduits").style.display = 'table';
    document.getElementById("tableauproduits").style.borderStyle = 'solid';
}



//Ajouter un produit au serveur avec les formulaires

document.getElementById("boutonajout").onclick = function() {
    var nom = document.getElementById("nomrecherche").value;
    var quantite = document.getElementById("nombrerecherche").value;
    ajouterAliment(nom, quantite);
}



//============Ajouter des produits : Méthode POST =========//

function ajouterAliment(nom, q) {
    var produit = { nom: nom, qte: q }

    const fetchOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(produit)
    }
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            afficherAliment();

        })
}

//=======Supprimer des produits : Méthode DELETE ==========//

function supprimerAliment(id) {

    const fetchOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: JSON.stringify()
    }
    fetch(url + "/" + id, fetchOptions)
        .then((response) => {
            return response.json();
            then((dataJSON) => {})
        })
}

//Supprimer un produit au serveur avec les formulaires

document.getElementById("supprimerunproduit").onclick = function() {
    supprimerAliment(e.id);
}

//=========Modifier des produits: METHODE PUT=============//


function modifierAliment(id, n, q) {
    var produit = { id: id, nom: n, qte: q }
    const fetchOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(produit)
    };
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json(); //récupérer sous format JSON
        })
        .then((dataJSON) => {
            console.log(dataJSON);


        })
}