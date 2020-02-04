function loadMap() {
  function onEachFeature(feature, layer) {
    // does this feature have a property named 'name'?
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name + '\nучеников ' +
        feature.properties.p);
        console.log(feature.properties.name);
    }
  }
  var map = L.map('map').setView([54.93, 83.18], 12);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

  L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
  }).addTo(map);
}
