var ventasIcon = L.icon({
    iconUrl: '../js/resources/ventas.png',
    shadowUrl: '../js/resources/sombra.png',

    iconSize:     [40, 40], // size of the icon
    shadowSize:   [40, 40], // size of the shadow
    iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 40],  // the same for the shadow
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

function PuntoDeVenta(latitud, longitud, localidad, calle, altura, nombre, horarioDeAtencion)
{
  this.ubic = new Ubicacion(latitud, longitud, localidad, calle, altura);
  this.nombre = nombre;
  this.horarioDeAtencion = horarioDeAtencion;
  this.getMarker = function()
  {
    var marker = L.marker(this.ubic.getLatLng(), {icon: ventasIcon});
    marker.bindPopup(this.nombre + "<br> " + this.ubic.getInfo()).openPopup();
    return marker;
  }
}
