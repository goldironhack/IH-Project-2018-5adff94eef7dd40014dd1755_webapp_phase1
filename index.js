/*JavaScript Google*/      
var map;
      function nyMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: {lat:40.729100  , lng:  -73.996500},
          zoom: 9.8
        });
        
          map.data.loadGeoJson(
                    'http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson');
          
          map.data.setStyle({
              fillColor: 'red',
              strokeWeight: 1
          });
      }
      
   

