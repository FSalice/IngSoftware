function lugares(disponibles)
{
  $.getJSON("JSON/lugares.json", function(json)
  {
    for(var i = 0; i < json.lugares.length; i++)
    {
      if(disponibles==json.lugares[i].disponible)
      {
        var lugar = new Lugar
        (
          json.lugares[i].latlng[0],
          json.lugares[i].latlng[1],
          json.lugares[i].localidad,
          json.lugares[i].calle,
          json.lugares[i].altura,
          json.lugares[i].disponible,
          json.lugares[i].patente
        );
        if(disponibles=="true")
        {
          agregarLugar(lugar);
        }else{
          agregarLugarOcupado(lugar);
        }
      }
    }
  });
}



function zonas()
{
  $.getJSON("JSON/zonas.json", function(json)
  {
    for(var i = 0; i < json.zonas.length; i++)
    {
      var v = [json.zonas[i].vertices[0]];

      for(var j = 1; j < json.zonas[i].vertices.length; j++)
      {
        v.push(json.zonas[i].vertices[j]);
      }

      var zona = new Zona(json.zonas[i].col, v);

      agregarPoligonoZona(zona);
    }
  });
}

function puntosVenta()
{
  $.getJSON("JSON/ventas.json", function(json)
  {
    for(var i = 0; i < json.puntos.length; i++)
    {
      var punto = new PuntoDeVenta
      (
        json.puntos[i].latlng[0],
        json.puntos[i].latlng[1],
        json.puntos[i].localidad,
        json.puntos[i].calle,
        json.puntos[i].altura,
        json.puntos[i].nombre,
        json.puntos[i].horario
      );
      agregarPuntoDeVenta(punto);
    }
  });
}

function trylog(user, pass)
{
  usuario = "error";
  $.getJSON("JSON/usuarios.json", function(json)
  {
    for(var i = 0; i < json.usuarios.length; i++)
    {
      if(user==json.usuarios[i].username)
      {
        if(pass==json.usuarios[i].password){
          usuario = [json.usuarios[i].username, json.usuarios[i].role];
          logged();
        }
      }
    }
    logged();
  });
}
