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
      var features = [];
      // find in data
      for (var i = 0; i < geojsonFeature.features.length; i++) {
        var feature = geojsonFeature.features[i];
        if (suggestion.data.school == feature.properties.id) {
          console.log(feature.properties.id + '--' + feature.properties.name);
          //$('#result').text(feature.properties.name);
          features.push(feature);
        }
        if (Array.isArray(suggestion.data.kindergarten)) {
          for (let index = 0; index < suggestion.data.kindergarten.length; index++) {
            const element = suggestion.data.kindergarten[index];
            if (element == feature.properties.id) {
              features.push(feature);
            }
          }
        } else {
          if (suggestion.data.kindergarten == feature.properties.id) {
            features.push(feature);
          }
        }
      }
      if (features.length > 0) {
        clearMap();
        addMarkers(features);
      }
    }
  });

  function clearMap() {
    markersLayer.clearLayers();
  }

  function addMarkers(features) {
    var bounds = [];
    for (var i = 0; i < features.length; i++) {
      // add marker
      var feature = features[i];
      var myIcon = L.divIcon({
        className: 'my-div-icon'
      });
      var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]/*, myIcon*/).bindPopup(feature.properties.name);

      markersLayer.addLayer(marker);
      bounds.push([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]);
      //marker.openPopup();
    }
    let sortBounds = findMinMaxCoordinates(bounds);
    markersLayer.addTo(map);
    var latLngBoundsMap = L.latLngBounds(sortBounds);
    //map.setView([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], 17);
    map.fitBounds(latLngBoundsMap);
    map.zoomOut(0.5);
  }

  function findMinMaxCoordinates(coordArray){ // coordArray = [[lng, lat], [lng, lat], [lng, lat]]
    var returnArray = [];
    var maxX = 0, maxY = 0, minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY;
    for (var i = 0; i < coordArray.length; i++){
      
      if (coordArray[i][0] < minX){
        minX = coordArray[i][0];
      }
      if (coordArray[i][1] < minY){
        minY = coordArray[i][1];
      }
      if (coordArray[i][0] > maxX){
        maxX = coordArray[i][0];
      }
      if (coordArray[i][1] > maxY){
        maxY = coordArray[i][1];
      }
    }
    // нужно сравнивать значения из coordArray для поиска max min
    // найденные 2 точки записать в returnArray
    returnArray.push([minX, minY]);
    returnArray.push([maxX, maxY]);
    return returnArray;
  }
}