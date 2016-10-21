var puntosVentaOn = false;
var zonasOn = false;
var ocupadosOn = false;
var disponiblesOn = false;
var usuario;

OCULTO="none";
VISIBLE="block";
function mostrar(blo) {
  document.getElementById(blo).style.display=VISIBLE;
}
function ocultar(blo) {
  document.getElementById(blo).style.display=OCULTO;
}

function clicked(item)
{
  switch(item)
  {
    case 0:
      trylog(document.getElementById("UserName").value,
                            document.getElementById("Password").value);
      break;
    case 1:
      mostrar("mapid");
      mostrar("menuMapa");
      ocultar("infraccionesYa");
      iniciarMapa();
      break;
    case 2:
      mostrar("infraccionesYa");
      ocultar("mapid");
      ocultar("menuMapa");
      break;
    case 3:
      if(!puntosVentaOn)
      {
        puntosVentaOn=true;
        puntosVenta();
        document.getElementById("menuServicio3").innerHTML = "Ocultar Puntos De Venta";
      }else{
        puntosVentaOn=false;
        quitarPuntosVenta();
        document.getElementById("menuServicio3").innerHTML = "Ver Puntos De Venta";
      }
      break;
    case 4:
      if(!zonasOn)
      {
        zonasOn=true;
        zonas();
        document.getElementById("menuServicio4").innerHTML = "Ocultar Zonas";
      }else{
        zonasOn=false;
        quitarPoligonos();
        document.getElementById("menuServicio4").innerHTML = "Ver Zonas";
      }
      break;
    case 5:
      if(!disponiblesOn)
      {
        disponiblesOn=true;
        lugares("true");
        document.getElementById("menuServicio5").innerHTML = "Ocultar Lugares Disponibles";
      }else{
        disponiblesOn=false;
        quitarLugaresDisponibles();
        document.getElementById("menuServicio5").innerHTML = "Ver Lugares Disponibles";
      }
      break;
    case 6:
      if(!ocupadosOn)
      {
        ocupadosOn=true;
        lugares("false");
        document.getElementById("menuServicio6").innerHTML = "Ocultar Lugares Ocupados";
      }else{
        ocupadosOn=false;
        quitarLugaresOcupados();
        document.getElementById("menuServicio6").innerHTML = "Ver Lugares Ocupados";
      }
      break;
  }
}

function logged()
{
  if(usuario!="error")
  {
    mostrar("sesion");
    document.getElementById("sesion").innerHTML = "Bienvenido/a " + usuario[0] + "! <a href='./index.html'>Cerrar Sesion</a>"
    ocultar("login");
    ocultar("error");
    if(usuario[1]=="Inspector")
    {
        mostrar("menuServicio6");
    }
    if(usuario[1]=="Conductor")
    {
        mostrar("menuServicio7");
    }
  }else{
    mostrar("error");
  }
}
