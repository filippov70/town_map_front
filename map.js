function loadMap() {
  var map = L.map('map').setView([54.93, 83.18], 12);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

  L.geoJSON(geojsonFeature).addTo(map);
}
