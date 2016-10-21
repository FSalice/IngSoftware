var ocupadoIcon = L.icon({
    iconUrl: 'js/resources/ocupado.png',
    shadowUrl: 'js/resources/sombra.png',

    iconSize:     [40, 40], // size of the icon
    shadowSize:   [40, 40], // size of the shadow
    iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 40],  // the same for the shadow
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});
var disponibleIcon = L.icon({
    iconUrl: 'js/resources/disponible.png',
    shadowUrl: 'js/resources/sombra.png',

    iconSize:     [40, 40], // size of the icon
    shadowSize:   [40, 40], // size of the shadow
    iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 40],  // the same for the shadow
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

function Lugar(latitud, longitud, localidad, calle, altura, disp, patente)
{
  this.ubic = new Ubicacion(latitud, longitud, localidad, calle, altura);
  this.patente = patente;
  this.disp = disp;
  this.getMarker = function()
  {
    var icono;
    if(this.disp == "true"){
      icono = disponibleIcon;
    }else{
      icono = ocupadoIcon;
    }
    var marker = L.marker(this.ubic.getLatLng(), {icon: icono});
    marker.bindPopup(this.patente + "<br> " + this.ubic.getInfo()).openPopup();
    return marker;
  }
}
