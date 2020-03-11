function loadMap() {
  // function onEachFeature(feature, layer) {
  //   // does this feature have a property named 'name'?
  //   if (feature.properties && feature.properties.name) {
  //     layer.bindPopup(feature.properties.name + '\nучеников ' +
  //       feature.properties.p);
  //     //console.log(feature.properties.name);
  //   }
  // }


  var map = L.map('map').setView([54.94, 83.19], 15);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

  // var searchLayer = L.geoJSON(geojsonFeature, {
  //   onEachFeature: onEachFeature
  // }).addTo(map);
  var markers = [];
  var markersLayer = new L.LayerGroup();

  $("#tags").autocomplete({
    lookup: address,
    triggerSelectOnValidInput: false,
    onFocus: function () {
      $("#tags").autocomplete().clear();
    },
    onSelect: function (suggestion) {
      console.log(suggestion.data.school);
      // find in layers
      // for (layer in searchLayer._layers) {
      //   var feature = searchLayer._layers[k=layer].feature;
      //   if (suggestion.data.school == feature.properties.id) {
      //     console.log(feature.properties.id + '--' + feature.properties.name);
      //   }
      // }
      // find in data
      for (var i = 0; i < geojsonFeatureSchool.features.length; i++) {
        var feature = geojsonFeatureSchool.features[i];
        if (suggestion.data.school == feature.properties.id) {
          console.log(feature.properties.id + '--' + feature.properties.name);
          $('#result').text(feature.properties.name);
          clearMap();
          addMarkers(feature);
        }
      }
    }
  });

  function clearMap() {
    markersLayer.clearLayers();
  }

  function addMarkers(feature) {
    // add marker
    var myIcon = L.divIcon({
      className: 'my-div-icon'
    });
    var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]/*, myIcon*/).bindPopup(feature.properties.name);
    markersLayer.addLayer(marker);
    markersLayer.addTo(map);
    map.setView([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], 17);
  }
}