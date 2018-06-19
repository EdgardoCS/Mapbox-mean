   map.on('click', 'levantamiento_completo', function(e) {
     var feat = JSON.parse(e.features[0].properties.descripcion);
     var descri = feat.descriptio;

     new mapboxgl.Popup()
       .setLngLat(e.features[0].geometry.coordinates)
       .setHTML(descri)
       .addTo(map);
   });
   map.on('mouseenter', 'levantamiento_completo', function() {
     map.getCanvas().style.cursor = 'pointer';
   });
   map.on('mouseleave', 'levantamiento_completo', function() {
     map.getCanvas().style.cursor = '';
   });
 
