/**
 * 
 */
searchId();

document.getElementById("contenant").innerHTML = "<div id='text-ephemere'><h1>Bienvenue sur la page.<br>Veuillez faire votre choix de rubrique.</h1></div>";

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// add the OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }).addTo(map);

      // show the scale bar on the lower left corner
      L.control.scale().addTo(map);



var listeCarrosserie = [];
var listeMecanique = [];
var listeHebergement = [];

var addServiceMecanique = document.getElementById("addMecanique")
addServiceMecanique.className = "form-group";

addServiceMecanique.addEventListener('click', function () {
  document.getElementById("contenant").innerHTML = "";
  document.getElementById("contenant").innerHTML = "<form><div class='form-group col-sm-6'><label for='inputUser'></label><input type='text' class='form-control' id='inputUser' placeholder='Utilisateur'></div><div class='form-group col-sm-6'><label for='inputLocalisation'></label><input type='text' class='form-control' id='inputLocalisation' placeholder='Localisation'></div><div class='form-group col-sm-8'><label for='inputComment'></label><textarea class='form-control' id='inputComment' rows='3'></textarea></div><button type='button' class='btn btn-primary' id='envoi'>Ajouter</button></form>";
  ajoutMecanique();
});


var rechercheMecanique = document.getElementById("rechercheMecanique");
rechercheMecanique.className = "dropdown";


rechercheMecanique.addEventListener('click', function () {
  document.getElementById("contenant").innerHTML = "";
  document.getElementById("contenant").innerHTML = "<div class='col-sm-6'><div class='dropdown'><button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Localisation</button><div id='dropdown-list' class='dropdown-menu' aria-labelledby='dropdownMenuButton'></div></div></div>";


  $.ajax({
    url: "http://localhost:8080/services/mecanique/recherche"
  }).then(function (data) {
    listeMecanique = data;
    chargerMenuMecanique();
  });



});
function chargerMenuMecanique() {
  listeMecanique.forEach(function (item) {
    var newMenuItem = document.createElement('button');
    newMenuItem.className = "dropdown-item";
    newMenuItem.type = "button";
    newMenuItem.textContent = item["localisation"];
    document.getElementById("dropdown-list").appendChild(newMenuItem);

    newMenuItem.addEventListener('click', function (event) {
      // l'action à effectuer lorsqu'on clique sur un element du dropdown

      chargerCard(item);

    });

  });
};



/**
 * Service Carrosserie
 */

var addServiceCarrosserie = document.getElementById("addCarrosserie")
addServiceCarrosserie.className = "form-group";
var rechercheCarrosserie = document.getElementById("rechercheCarrosserie");
rechercheCarrosserie.className = "dropdown";

addServiceCarrosserie.addEventListener('click', function () {
  // document.getElementById("contenant").innerHTML = "";
  document.getElementById("contenant").innerHTML = "<form><div class='form-group col-sm-6'><label for='inputUser'></label><input type='text' class='form-control' id='inputUser' placeholder='Utilisateur'></div><div class='form-group col-sm-6'><label for='inputLocalisation'></label><input type='text' class='form-control' id='inputLocalisation' placeholder='Localisation'></div><div class='form-group col-sm-8'><label for='inputComment'></label><textarea class='form-control' id='inputComment' rows='3'></textarea></div><button type='button' class='btn btn-primary' id='envoi'>Ajouter</button></form>";
  ajoutCarrosserie();
});


rechercheCarrosserie.addEventListener('click', function () {
  //document.getElementById("contenant").innerHTML = "";
  document.getElementById("contenant").innerHTML = "<div class='col-sm-6'><div class='dropdown'><button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Localisation</button><div id='dropdown-list' class='dropdown-menu' aria-labelledby='dropdownMenuButton'></div></div></div>";

  $.ajax({
    url: "http://localhost:8080/services/carrosserie/recherche"
  }).then(function (data) {
    listeCarrosserie = data;
    chargerMenuCarrosserie();
  });

});



function chargerMenuCarrosserie() {
  listeCarrosserie.forEach(function (item) {
    var newMenuItem = document.createElement('button');
    newMenuItem.className = "dropdown-item";
    newMenuItem.type = "button";
    newMenuItem.textContent = item["localisation"];
    document.getElementById("dropdown-list").appendChild(newMenuItem);

    newMenuItem.addEventListener('click', function (event) {
      // l'action à effectuer lorsqu'on clique sur un element du dropdown

      chargerCard(item);

    });

  });
};
function chargerCard(item) {


  document.getElementById("contenant").innerHTML = "<div class='card' id='card'></div>";
  let cardTitle = document.createElement('h3');
  cardTitle.className = "card-title";
  cardTitle.innerText = "Utilisateur: \n" + item["user"];
  document.getElementById("card").appendChild(cardTitle);
  let localisation = document.createElement('h4');
  localisation.className = "card-subtitle mb-2 text-muted";
  localisation.innerText = "Ville: \n" + item["localisation"];
  document.getElementById("card").appendChild(localisation);
  let comment = document.createElement('p');
  comment.className = "card-text";
  comment.innerText = "Description:\n " + item["comment"];
  document.getElementById("card").appendChild(comment);
  let nbCouchage = document.createElement('p');
  nbCouchage.className = "card-text";
  nbCouchage.innerText = "Nombre de couchages si hébergement: \n" + item["nbCouchage"];
  document.getElementById("card").appendChild(nbCouchage);

};


var addServiceHebergement = document.getElementById("addHebergement")
addServiceHebergement.className = "form-group";
var rechercheHebergement = document.getElementById("rechercheHebergement");
rechercheHebergement.className = "dropdown";





rechercheHebergement.addEventListener('click', function () {
  document.getElementById("contenant").innerHTML = "";
  document.getElementById("contenant").innerHTML = "<div class='col-sm-6'><div class='dropdown'><button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Localisation</button><div id='dropdown-list' class='dropdown-menu' aria-labelledby='dropdownMenuButton'></div></div></div>";
  $.ajax({
    url: "http://localhost:8080/services/hebergement/recherche"
  }).then(function (data) {
    listeHebergement = data;
    chargerMenuHebergement();
  });

});



function chargerMenuHebergement() {
  listeHebergement.forEach(function (item) {
    var newMenuItem = document.createElement('button');
    newMenuItem.className = "dropdown-item";
    newMenuItem.type = "button";
    newMenuItem.textContent = item["localisation"];
    document.getElementById("dropdown-list").appendChild(newMenuItem);

    newMenuItem.addEventListener('click', function (event) {
      // l'action à effectuer lorsqu'on clique sur un element du dropdown

      chargerCard(item);

    });

  });
};


function ajoutMecanique() {
  document.getElementById("envoi").addEventListener('click', function (e) {
    $.post("http://localhost:8080/services/mecanique/add", {
      user: document.getElementById("inputUser").value,
      localisation: document.getElementById("inputLocalisation").value,
      comment: document.getElementById("inputComment").value
    });
    document.location.reload(true);
  });
};


function ajoutCarrosserie() {
  document.getElementById("envoi").addEventListener('click', function (e) {
    $.post("http://localhost:8080/services/carrosserie/add", {
      user: document.getElementById("inputUser").value,
      localisation: document.getElementById("inputLocalisation").value,
      comment: document.getElementById("inputComment").value
    });
    document.location.reload(true);
  });
};

addServiceHebergement.addEventListener('click', function () {
  //document.getElementById("contenant").innerHTML = "";
  document.getElementById("contenant").innerHTML = "<form><div class='form-group col-sm-6'><label for='inputUser'></label><input type='text' class='form-control' id='inputUser' placeholder='Utilisateur'></div><div class='form-group col-sm-6'><label for='inputLocalisation'></label><input type='text' class='form-control' id='inputLocalisation' placeholder='Localisation'></div><div class='form-group col-sm-8'><label for='inputComment'></label><textarea class='form-control' id='inputComment' rows='3'></textarea></div><div class='form-group col-sm-6'><label for='inputUser'></label><input type='text' class='form-control' id='inputCouchage' placeholder='Nombre couchages*'></div><button type='button' class='btn btn-primary' id='envoi'>Ajouter un hébergement</button></form>";
  ajoutHebergement();
});


function ajoutHebergement() {
  document.getElementById("envoi").addEventListener('click', function (e) {
    $.post("http://localhost:8080/services/hebergement/add", {
      user: document.getElementById("inputUser").value,
      localisation: document.getElementById("inputLocalisation").value,
      comment: document.getElementById("inputComment").value,
      nbCouchage: document.getElementById("inputCouchage").value,
    });
    document.location.reload(true);
  });
};


function searchId() {
  document.getElementById("search-button").addEventListener("click", function (e) {

    id = document.getElementById("inputsearch").value;
    $.ajax({
      url: "http://localhost:8080/services/rechercheId/" + id,
      success: (chargerCard),

      error: (error)
    })
  })
};

function error() {
  document.getElementById("contenant").innerHTML = "";
  document.getElementById("contenant").innerHTML = "<div id='404'><a href='index.html' class='btn btn-primary btn-lg active' role='button' aria-pressed='true'>Retour à l'accueil</a><img src='HTML/Images/error-404-1252056_960_720.webp' alt=''></div>";

};


