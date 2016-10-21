var map;
var clusterVentas;
var clusterLugares;
var clusterLugaresOcupados;
var poligonosZonas;
var iniciado;

function iniciarMapa()
{
  if(!iniciado)
  {
    map = L.map('mapid').setView([-34.5221554, -58.7000067], 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap'
    }).addTo(map);

    clusterVentas = L.markerClusterGroup();
    clusterVentas.addTo(map);
    clusterLugares = L.markerClusterGroup();
    clusterLugares.addTo(map);
    clusterLugaresOcupados = L.markerClusterGroup();
    clusterLugaresOcupados.addTo(map);

    poligonosZonas = [L.polygon([])];

    iniciado=true;
  }
}


function agregarPuntoDeVenta(punto)
{
  punto.getMarker().addTo(clusterVentas);
}

function quitarPuntosVenta()
{
  clusterVentas.clearLayers();
}

function agregarLugar(punto)
{
  punto.getMarker().addTo(clusterLugares);
}

function quitarLugaresDisponibles()
{
  clusterLugares.clearLayers();
}

function agregarLugarOcupado(punto)
{
  punto.getMarker().addTo(clusterLugaresOcupados);
}

function quitarLugaresOcupados()
{
  clusterLugaresOcupados.clearLayers();
}

function agregarPoligonoZona(zona)
{
  var pol = zona.getPolygon();
  poligonosZonas.push(pol);
  pol.addTo(map);
}

function quitarPoligonos()
{
  for(var i = 0; i < poligonosZonas.length; i++)
  {
    map.removeLayer(poligonosZonas[i]);
  }
  poligonosZonas = [L.polygon([])];
}

function bootstrap()
{
  iniciarMapa();

  var ungsLocation = [-34.5221554, -58.7000067];



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
