const central = [-25.4013964, -57.5229283];

const map = L.map("map-template").setView(central, 13);
L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
}).addTo(map);

L.marker([-25.378976, -57.489773]).bindPopup("Casa de Daia").addTo(map);
L.marker([-25.455985, -57.433697]).bindPopup("Casa de Mirtus").addTo(map);
L.marker([-25.384375, -57.496367]).bindPopup("Casa de Enri").addTo(map);
