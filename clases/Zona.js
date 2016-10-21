var colorVerde = "#0f0";
var colorAzul = "#00f";

function Zona(col, vertices)
{
  this.col = col;
  this.vertices = vertices;
  this.getPolygon = function()
  {
    var l = [L.latLng(vertices[0])];
    for(i = 1; i < vertices.length; i++)
    {
      l.push(L.latLng(vertices[i]));
    }
    var pol = L.polygon(l);
    pol.setStyle(
    {
      color: col,
      fillColor: col,
      fillOpacity: 0.5
    });
    return pol;
  }
}
