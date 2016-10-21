function lugares(disponibles)
{
    for(var i = 0; i < repoLugares.length; i++)
    {
      if(disponibles==repoLugares[i].disponible)
      {
        var lugar = new Lugar
        (
          repoLugares[i].latlng[0],
          repoLugares[i].latlng[1],
          repoLugares[i].localidad,
          repoLugares[i].calle,
          repoLugares[i].altura,
          repoLugares[i].disponible,
          repoLugares[i].patente
        );
        if(disponibles=="true")
        {
          agregarLugar(lugar);
        }else{
          agregarLugarOcupado(lugar);
        }
      }
    }
}

function zonas()
{
  for(var i = 0; i < repoZonas.length; i++)
  {
    var v = [repoZonas[i].vertices[0]];

    for(var j = 1; j < repoZonas[i].vertices.length; j++)
    {
      v.push(repoZonas[i].vertices[j]);
    }

    var zona = new Zona(repoZonas[i].col, v);

    agregarPoligonoZona(zona);
  }
}

function puntosVenta()
{
  for(var i = 0; i < repoPuntos.length; i++)
  {
    var punto = new PuntoDeVenta
    (
      repoPuntos[i].latlng[0],
      repoPuntos[i].latlng[1],
      repoPuntos[i].localidad,
      repoPuntos[i].calle,
      repoPuntos[i].altura,
      repoPuntos[i].nombre,
      repoPuntos[i].horario
    );
    agregarPuntoDeVenta(punto);
  }
}

function misAutos(usuario)
{
  for(var i = 0; i < repoUsuarios.length; i++)
  {
    if(usuario==repoUsuarios[i].username)
    {
      for(var j = 0; j < repoUsuarios[i].patentes.length; j++)
      {
        for(var k = 0; k < repoLugares.length; k++)
        {
          if(repoUsuarios[i].patentes[j]==repoLugares[k].patente)
          {
            var l = new Lugar(
              repoLugares[k].latlng[0],
              repoLugares[k].latlng[1],
              repoLugares[k].localidad,
              repoLugares[k].calle,
              repoLugares[k].altura,
              repoLugares[k].disponible,
              repoLugares[k].patente);
            agregarMiAuto(l);
          }
        }
      }
    }
  }
}

function trylog(user, pass)
{
  usuario = "error";
  for(var i = 0; i < repoUsuarios.length; i++)
  {
    if(user==repoUsuarios[i].username)
    {
      if(pass==repoUsuarios[i].password){
        usuario = [repoUsuarios[i].username, repoUsuarios[i].role];
        logged();
      }
    }
  }
  logged();
}
