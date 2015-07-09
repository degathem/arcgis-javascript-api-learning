require(["esri/map", "dojo/domReady!"], function(Map) { 
  var map = new Map("map", {
    center: [-111, 51.5],
    zoom: 8,
    basemap: "topo"
  });
});