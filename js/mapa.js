var map;
var clusterVentas;
var clusterLugares;
var clusterLugaresOcupados;
var clusterMisAutos;
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
    clusterMisAutos = L.markerClusterGroup();
    clusterMisAutos.addTo(map);

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

function agregarMiAuto(punto)
{
  punto.getMarker().addTo(clusterMisAutos);
}

function quitarMisAutos()
{
  clusterMisAutos.clearLayers();
}
