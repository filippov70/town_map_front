var geojsonFeature = {
  "type": "FeatureCollection",
  "name": "school",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "features": [{
      "type": "Feature",
      "properties": {
        "id": 1,
        "name": "средняя школя №5",
        "p": 1600
      },
      "geometry": {
        "type": "Point",
        "coordinates": [83.181395592265, 54.937885391291]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 2,
        "name": "Биотехнологический лицей №21",
        "p": 2000
      },
      "geometry": {
        "type": "Point",
        "coordinates": [83.190113286008, 54.945157867692]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 3,
        "name": "Школа №3 \"Технополис\"",
        "p": 0
      },
      "geometry": {
        "type": "Point",
        "coordinates": [83.191629872107, 54.934588154689]
      }
    }
  ]
};

var o = 6;
