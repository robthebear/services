

function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    var latitude  = position.coords.latitude;
	var longitude = position.coords.longitude;
	
// initialize Leaflet
      var map = L.map('map').setView({lon: longitude, lat: latitude}, 16);

      // add the OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 25,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }).addTo(map);

      // show the scale bar on the lower left corner
      L.control.scale().addTo(map);

      // show a marker on the map
      L.marker({lon: longitude, lat: latitude}).bindPopup('<h3>You are here!</h3>').addTo(map);


  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
     geoFindMe();
  }
}
