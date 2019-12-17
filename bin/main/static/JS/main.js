/**
 * 
 */


document.getElementById("creation").innerHTML = "<div id='text-ephemere'><h1>Bienvenue sur la page.<br>Veuillez faire votre choix de rubrique.</h1></div>";



var listeCarrosserie = [];
var listeMecanique = [];
var listeHebergement = [];
/**
 * Service mecanique
 */

let addServiceMecanique = document.getElementById("addMecanique")
addServiceMecanique.className = "form-group";
let rechercheMecanique = document.getElementById("rechercheMecanique");
rechercheMecanique.className = "dropdown";

addServiceMecanique.addEventListener('click', function () {
  document.getElementById("creation").innerHTML = "";
  document.getElementById("creation2").innerHTML = "<form><div class='form-group col-sm-6'><label for='inputUser'>User</label><input type='text' class='form-control' id='inputUser' placeholder='User'></div><div class='form-group col-sm-6'><label for='inputLocalisation'>Location</label><input type='text' class='form-control' id='inputLocalisation' placeholder='Location'></div><div class='form-group col-sm-8'><label for='inputComment'>Description des compétences</label><textarea class='form-control' id='inputComment' rows='3'></textarea></div><button type='button' class='btn btn-primary' id='envoi'>Ajouter une compétence</button></form>";
  ajoutMecanique();
});

function ajoutMecanique() {
  document.getElementById("envoi").addEventListener('click', function (e) {
    $.post("http://localhost:8080/services/mecanique/add", {
      userServiceMecanique: document.getElementById("inputUser").value,
      localistaionServiceMecanique: document.getElementById("inputLocalisation").value,
      commentServiceMecanique: document.getElementById("inputComment").value
    });
    document.location.reload(true);
  });
};



rechercheMecanique.addEventListener('click', function () {
  document.getElementById("creation").innerHTML = "";
  document.getElementById("creation2").innerHTML = "<div class='col-sm-12'><div class='dropdown'><button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Localisation</button><div id='dropdown-list' class='dropdown-menu' aria-labelledby='dropdownMenuButton'></div></div></div>";
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
    newMenuItem.textContent = item["localistaionServiceMecanique"];
    document.getElementById("dropdown-list").appendChild(newMenuItem);

    newMenuItem.addEventListener('click', function (event) {
      // l'action à effectuer lorsqu'on clique sur un element du dropdown
      document.getElementById("creation").innerHTML = "";
      document.getElementById("creation").innerHTML = "<div class='card' id='card'></div>";
      chargerLocalisationMecanique(item);

    });

  });
};
function chargerLocalisationMecanique(item) {

  let cardTitle = document.createElement('h5');
  cardTitle.className = "card";
  cardTitle.innerText = item["userServiceMecanique"];
  document.getElementById("card").appendChild(cardTitle);
  let localisationUser = document.createElement('p');
  localisationUser.className = "card";
  localisationUser.innerText = item["localistaionServiceMecanique"];
  document.getElementById("card").appendChild(localisationUser);
  let descriptionCarrosserie = document.createElement('h6');
  descriptionCarrosserie.className = "card";
  descriptionCarrosserie.innerText = item["commentServiceMecanique"];
  document.getElementById("card").appendChild(descriptionCarrosserie);

};


/**
 * Service Carrosserie
 */

let addServiceCarrosserie = document.getElementById("addCarrosserie")
addServiceCarrosserie.className = "form-group";
let rechercheCarrosserie = document.getElementById("rechercheCarrosserie");
rechercheCarrosserie.className = "dropdown";

addServiceCarrosserie.addEventListener('click', function () {
  document.getElementById("creation").innerHTML = "";
  document.getElementById("creation2").innerHTML = "<form><div class='form-group col-sm-6'><label for='inputUser'>User</label><input type='text' class='form-control' id='inputUser' placeholder='User'></div><div class='form-group col-sm-6'><label for='inputLocalisation'>Location</label><input type='text' class='form-control' id='inputLocalisation' placeholder='Location'></div><div class='form-group col-sm-8'><label for='inputComment'>Description des compétences</label><textarea class='form-control' id='inputComment' rows='3'></textarea></div><button type='button' class='btn btn-primary' id='envoi'>Ajouter une compétence</button></form>";
  ajoutCarrosserie();
});

rechercheCarrosserie.addEventListener('click', function () {
  document.getElementById("creation").innerHTML = "";
  document.getElementById("creation2").innerHTML = "<div class='col-sm-12'><div class='dropdown'><button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Localisation</button><div id='dropdown-list' class='dropdown-menu' aria-labelledby='dropdownMenuButton'></div></div></div>";
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
    newMenuItem.textContent = item["localisationCarrosserie"];
    document.getElementById("dropdown-list").appendChild(newMenuItem);

    newMenuItem.addEventListener('click', function (event) {
      // l'action à effectuer lorsqu'on clique sur un element du dropdown
      document.getElementById("creation").innerHTML = "";
      document.getElementById("creation").innerHTML = "<div class='card' id='card'></div>";
      // document.getElementById("card").innerHTML = "<div id='titre' class='card-header'><h2>Carrosserie</h2>User:<br></div><div class='card-body'><blockquote class='blockquote mb-0'><p id='description'>Description:<br></p><footer id= 'localisation' class='blockquote-footer'>Localisation:<br><cite title='Source Title'></cite></footer></blockquote></div>";
      chargerLocalisationCarrosserie(item);

    });

  });
};
function chargerLocalisationCarrosserie(item) {

  let cardTitle = document.createElement('h5');
  cardTitle.className = "card";
  cardTitle.innerText = item["userCarrosserie"];
  document.getElementById("card").appendChild(cardTitle);
  let localisationUser = document.createElement('p');
  localisationUser.className = "card";
  localisationUser.innerText = item["localisationCarrosserie"];
  document.getElementById("card").appendChild(localisationUser);
  let descriptionCarrosserie = document.createElement('h6');
  descriptionCarrosserie.className = "card";
  descriptionCarrosserie.innerText = item["commentCarrosserie"];
  document.getElementById("card").appendChild(descriptionCarrosserie);

};
function ajoutCarrosserie() {
  document.getElementById("envoi").addEventListener('click', function (e) {
    $.post("http://localhost:8080/services/carrosserie/add", {
      userCarrosserie: document.getElementById("inputUser").value,
      localisationCarrosserie: document.getElementById("inputLocalisation").value,
      commentCarrosserie: document.getElementById("inputComment").value
    });
    document.location.reload(true);
  });
};

/**
 * Service Hebergement
 */

let addServiceHebergement = document.getElementById("addHebergement")
addServiceHebergement.className = "form-group";
let rechercheHebergement = document.getElementById("rechercheHebergement");
rechercheHebergement.className = "dropdown";


addServiceHebergement.addEventListener('click', function () {
  document.getElementById("creation").innerHTML = "";
  document.getElementById("creation2").innerHTML = "<form><div class='form-group col-sm-6'><label for='inputUser'>User</label><input type='text' class='form-control' id='inputUser' placeholder='User'></div><div class='form-group col-sm-6'><label for='inputLocalisation'>Location</label><input type='text' class='form-control' id='inputLocalisation' placeholder='Location'></div><div class='form-group col-sm-8'><label for='inputComment'>Description des compétences</label><textarea class='form-control' id='inputComment' rows='3'></textarea></div><button type='button' class='btn btn-primary' id='envoi'>Ajouter une compétence</button></form>";
  ajoutMecanique();
});


rechercheHebergement.addEventListener('click', function () {
  document.getElementById("creation").innerHTML = "";
  document.getElementById("creation2").innerHTML = "<div class='col-sm-12'><div class='dropdown'><button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Localisation</button><div id='dropdown-list' class='dropdown-menu' aria-labelledby='dropdownMenuButton'></div></div></div>";
  $.ajax({
    url: "http://localhost:8080/services/hebergement/recherche"
  }).then(function (data) {
    listeHebergement = data;
    chargerMenuHebergement();
  });

});



function chargerMenuHebergement() {
  listeMecanique.forEach(function (item) {
    var newMenuItem = document.createElement('button');
    newMenuItem.className = "dropdown-item";
    newMenuItem.type = "button";
    newMenuItem.textContent = item["localisationHebergement"];
    document.getElementById("dropdown-list").appendChild(newMenuItem);

    newMenuItem.addEventListener('click', function (event) {
      // l'action à effectuer lorsqu'on clique sur un element du dropdown
      document.getElementById("creation").innerHTML = "";
      document.getElementById("creation").innerHTML = "<div class='card' id='card'></div>";
      chargerLocalisationHebergement(item);

    });

  });
};




function chargerLocalisationHebergement(item) {

  let cardTitle = document.createElement('h5');
  cardTitle.className = "card";
  cardTitle.innerText = item["userHebergement"];
  document.getElementById("card").appendChild(cardTitle);
  let nbCouchageHebergement = document.createElement('p');
  nbCouchageHebergement.className = "card";
  nbCouchageHebergement.innerText = item["nbCouchageHebergement"];
  document.getElementById("card").appendChild(nbCouchageHebergement);
  let localisationUser = document.createElement('p');
  localisationUser.className = "card";
  localisationUser.innerText = item["localisationHebergement"];
  document.getElementById("card").appendChild(localisationUser);
  let commentHebergement = document.createElement('h6');
  commentHebergement.className = "card";
  commentHebergement.innerText = item["commentHebergement"];
  document.getElementById("card").appendChild(commentHebergement);

};

function ajoutHebergement() {
  document.getElementById("envoi").addEventListener('click', function (e) {
    $.post("http://localhost:8080/services/hebergement/add", {
      localisationHebergement: document.getElementById("inputLocalisation").value,
      userHebergement: document.getElementById("inputUser").value,
      nbCouchageHebergement: document.getElementById("inputComment").value,
      commentHebergement: document.getElementById("inputComment").value
    });
    document.location.reload(true);
  });
};

function searchId(){
  document.getElementById("search-button").addEventListener("click",function(e){
      id=document.getElementById("inputsearch").value;
  $.ajax({
      url:"http://localhost:8080/article/byid/"+id,
   success :  (afficherCard),
   error : (error)})})};
  

