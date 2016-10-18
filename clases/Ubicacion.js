var lat;
var lng;
var localidad;
var calle;
var altura;
var cp;

function Ubicacion(latitud, longitud, localidad, calle, altura, codigoPostal)
{
  this.lat = latitud;
  this.lng = longitud;
  this.localidad = localidad;
  this.calle = calle;
  this.altura = altura;
  this.cp = codigoPostal;

  this.getLatLng = function()
  {
    return [this.lat, this.lng];
  }
}
