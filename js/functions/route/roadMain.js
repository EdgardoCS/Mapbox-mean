mapboxgl.accessToken = 'pk.eyJ1IjoiZWRnYXJkb3MiLCJhIjoiY2oydXNhM2t4MDAwZTJ2bGF6dWEzZmY1bSJ9.hqndt_ot8gOGH8p8C1qygg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/edgardos/cj5v8e606669u2rocjpewesp4',

  zoom: 11.6,
  center: [-71.625, -33.047]
});
map.addControl(new mapboxgl.NavigationControl());
