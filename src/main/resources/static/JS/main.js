/**
 * 
 */

//searchId();
document.getElementById("creation").innerHTML = "<div id='text-ephemere'><h1>Bienvenue sur la page.<br>Veuillez faire votre choix de rubrique.</h1></div>";



var listeCarrosserie = [];
var listeMecanique = [];
var listeHebergement = [];
/**
 * Service mecanique
 */

var addServiceMecanique = document.getElementById("addMecanique")
addServiceMecanique.className = "form-group";
var rechercheMecanique = document.getElementById("rechercheMecanique");
rechercheMecanique.className = "dropdown";

addServiceMecanique.addEventListener('click', function () {
  document.getElementById("creation").innerHTML = "";
  document.getElementById("creation2").innerHTML = "<form><div class='form-group col-sm-6'><label for='inputUser'>User</label><input type='text' class='form-control' id='inputUser' placeholder='User'></div><div class='form-group col-sm-6'><label for='inputLocalisation'>Location</label><input type='text' class='form-control' id='inputLocalisation' placeholder='Location'></div><div class='form-group col-sm-8'><label for='inputComment'>Description des compétences</label><textarea class='form-control' id='inputComment' rows='3'></textarea></div><button type='button' class='btn btn-primary' id='envoi'>Ajouter une compétence</button></form>";
  ajoutMecanique();
});

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



rechercheMecanique.addEventListener('click', function () {
  document.getElementById("creation").innerHTML = "";
  document.getElementById("creation2").innerHTML = "<div class='col-sm-12'><div class='dropdown'><button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Localisation</button><div id='dropdown-list' class='dropdown-menu' aria-labelledby='dropdownMenuButton'></div></div></div>";
  $.ajax({
    url: "http://localhost:8080/services/mecanique/recherche"
  }).then(function (data) {
    listeMecanique = data;
  });
  chargerMenuMecanique();


});
function chargerMenuMecanique() {
  listeMecanique.forEach(function (item) {
    var newMenuItem = document.createElement('button');
    newMenuItem.className = "dropdown-item";
    newMenuItem.type = "button";
    newMenuItem.textContent = item["localistaion"];
    document.getElementById("dropdown-list").appendChild(newMenuItem);

    newMenuItem.addEventListener('click', function (event) {
      // l'action à effectuer lorsqu'on clique sur un element du dropdown
      document.getElementById("creation").innerHTML = "";
      document.getElementById("creation2").innerHTML = "<div class='card' id='card'></div>";
      chargerLocalisation(item);

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
  document.getElementById("creation").innerHTML = "";
  document.getElementById("creation2").innerHTML = "<form><div class='form-group col-sm-6'><label for='inputUser'>User</label><input type='text' class='form-control' id='inputUser' placeholder='User'></div><div class='form-group col-sm-6'><label for='inputLocalisation'>Location</label><input type='text' class='form-control' id='inputLocalisation' placeholder='Location'></div><div class='form-group col-sm-8'><label for='inputComment'>Description des compétences</label><textarea class='form-control' id='inputComment' rows='3'></textarea></div><button type='button' class='btn btn-primary' id='envoi'>Ajouter une compétence</button></form>";
  ajoutCarrosserie();
});


rechercheCarrosserie.addEventListener('click', function () {
  document.getElementById("creation").innerHTML = "";
  document.getElementById("creation").innerHTML = "<div class='col-sm-12'><div class='dropdown'><button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Localisation</button><div id='dropdown-list' class='dropdown-menu' aria-labelledby='dropdownMenuButton'></div></div></div>";
  console.log("coucou");
  
  $.ajax({
    url: "http://localhost:8080/services/carrosserie/recherche"
  }).then(function (data) {
    listeCarrosserie = data;
  }); 
  chargerLocalisation(item);
  chargerMenuCarrosserie();
});



function chargerMenuCarrosserie() {
  listeCarrosserie.forEach(function (item) {
    console.log(item);
    console.log("coucou");
    var newMenuItem = document.createElement('button');
    newMenuItem.className = "dropdown-item";
    newMenuItem.type = "button";
    newMenuItem.textContent = item["localisation"];
    document.getElementById("dropdown-list").appendChild(newMenuItem);

    newMenuItem.addEventListener('click', function (event) {
      // l'action à effectuer lorsqu'on clique sur un element du dropdown
      document.getElementById("creation").innerHTML = "";
      document.getElementById("creation2").innerHTML = "<div class='card' id='card'></div>";
      // document.getElementById("card").innerHTML = "<div id='titre' class='card-header'><h2>Carrosserie</h2>User:<br></div><div class='card-body'><blockquote class='blockquote mb-0'><p id='description'>Description:<br></p><footer id= 'localisation' class='blockquote-footer'>Localisation:<br><cite title='Source Title'></cite></footer></blockquote></(item);
      
      
    });

  });
};
function chargerLocalisation(item) {

  let cardTitle = document.createElement('h5');
  cardTitle.className = "card";
  cardTitle.innerText = item["user"];
  document.getElementById("card").appendChild(cardTitle);
  let localisation = document.createElement('p');
  localisation.className = "card";
  localisation.innerText = item["localisation"];
  document.getElementById("card").appendChild(localisation);
  let comment = document.createElement('h6');
  comment.className = "card";
  comment.innerText = item["comment"];
  document.getElementById("card").appendChild(comment);

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

/**
 * Service Hebergement
 */

var addServiceHebergement = document.getElementById("addHebergement")
addServiceHebergement.className = "form-group";
var rechercheHebergement = document.getElementById("rechercheHebergement");
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
  });
  chargerMenuHebergement();

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
      document.getElementById("creation").innerHTML = "";
      document.getElementById("creation2").innerHTML = "<div class='card' id='card'></div>";
      chargerLocalisation(item);

    });

  });
};






function ajoutHebergement() {
  document.getElementById("envoi").addEventListener('click', function (e) {
    $.post("http://localhost:8080/services/hebergement/add", {
      user: document.getElementById("inputUser").value,
      localisation: document.getElementById("inputLocalisation").value,
      commentHebergement: document.getElementById("inputComment").value,
      nbCouchageHebergement: document.getElementById("inputComment").value,
    });
    document.location.reload(true);
  });
};
/** 
function searchId(){
  document.getElementById("search-button").addEventListener("click",function(e){

    id=document.getElementById("inputsearch").value;
    $.ajax({
        url:"http://localhost:8080/services/recheche/"+id,
     success :  (console.log(ok)),
     error : (error)})})};

     function error (data){
      //document.location.href="404error.html"
      console.log("KO");
   }
*/
