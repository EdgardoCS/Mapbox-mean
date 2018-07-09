const mapDraw = new MapboxDraw({
  displayControlsDefault: false,
  controls: {
    polygon: true,
    trash: true
  },
  styles: [{
      "id": "gl-draw-polygon-fill",
      "type": "fill",
      //  "filter": ["all", ["==", "$type", "Polygon"], ["!=", "mode", "static"]],
      "paint": {
        "fill-color": "#0BD1C3",
        "fill-outline-color": "#D20C0C",
        "fill-opacity": 0.1
      }
    },
    //*** HERE YOU DEFINE POINT STYLE *** //
    {
      "id": "gl-draw-point",
      "type": "circle",
      "paint": {
        "circle-radius": 5,
        "circle-color": "#ff0202"
      }
    }, //**********************************//
    {
      "id": "gl-draw-polygon-stroke-active",
      "type": "line",
      //  "filter": ["all", ["==", "$type", "Polygon"], ["!=", "mode", "static"]],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#D20C0C",
        "line-dasharray": [0.2, 2],
        "line-width": 3
      }
    },
    {
      "id": "gl-draw-polygon-and-line-vertex-active",
      "type": "circle",
      "filter": ["all", ["==", "meta", "vertex"],
        ["==", "$type", "Point"],
        ["!=", "mode", "static"]
      ],
      "paint": {
        "circle-radius": 3,
        "circle-color": "#470CD1",
      }
    }
  ]
})
map.addControl(mapDraw,'bottom-right');
