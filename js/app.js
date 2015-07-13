require(["esri/map", "dojo/domReady!"], function(Map) { 
  var map = new Map("mapDiv", {
    center: [-111, 51.5],
    zoom: 8,
    basemap: "topo"
  });
});