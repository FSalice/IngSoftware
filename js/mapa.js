var map;

function iniciarMapa()
{
  map = L.map('mapid').setView([-34.5221554, -58.7000067], 15);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap'
  }).addTo(map);
}

function test()
{
  iniciarMapa();
}

function bootstrap()
{
  iniciarMapa();
  
  var ungsLocation = [-34.5221554, -58.7000067];

  L.polygon([L.latLng(-34.515594, -58.705654),
  L.latLng(-34.523503, -58.714062),
  L.latLng(-34.519177, -58.719890),
  L.latLng(-34.511089, -58.711374),
  L.latLng(-34.514062, -58.707909),
  L.latLng(-34.513824, -58.707584)
  ]).addTo(map);


  var ungsIcon = L.icon({
      iconUrl: '../js/resources/33622.png',
      shadowUrl: '../js/resources/33622sombra.png',

      iconSize:     [40, 40], // size of the icon
      shadowSize:   [40, 40], // size of the shadow
      iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
      shadowAnchor: [0, 40],  // the same for the shadow
      popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
  });

  var ungsMarker = L.marker(ungsLocation, {icon: ungsIcon});
  ungsMarker.bindPopup("<b>Hola!</b><br>Lulu, Ale y Vane son altos gatitos").openPopup();

  ungsMarker.addTo(map);


  map.on('click', onMapClick);


  var cluster = L.markerClusterGroup();

  cluster.addLayers([
    ungsMarker,
    L.marker([-34.533755, -58.692713]),
    L.marker([-34.516181, -58.716625])
  ]);

  cluster.addTo(map);


    var popup = L.popup();

}
