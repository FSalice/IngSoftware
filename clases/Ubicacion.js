function Ubicacion(latitud, longitud, localidad, calle, altura)
{
  this.lat = latitud;
  this.lng = longitud;
  this.localidad = localidad;
  this.calle = calle;
  this.altura = altura;

  this.getInfo = function()
  {
    return this.calle + this.altura + "<br> " + this.localidad;
  }

  this.getLatLng = function()
  {
    return [this.lat, this.lng];
  }
}
