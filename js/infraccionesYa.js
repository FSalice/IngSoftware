
/*
Ver estos links
https://www.kirupa.com/html5/making_http_requests_js.htm
https://spring.io/guides/gs/consuming-rest-jquery/



/*
var xmlhttp = new XMLHttpRequest();
var url = "https://infraccionesya.herokuapp.com/api/ABC123/infracciones/";

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

*/

/*
var infracciones =

document.getElementById("content").innerHTML =
infracciones.fechaHoraRegistro + "<br>" +
infracciones.fechaHoraActualizacion + "<br>" +
infracciones.direccionRegistrada+ "<br>" +
infracciones.montoAPagar+ "<br>" +
infracciones.existeAcarreo;

*/

/*
{"patente":"ABC123","infracciones":[
{"id":42,"fechaHoraRegistro":"Sat, 20 Aug 2016 02:00:01 GMT","fechaHoraActualizacion":"Sat, 20 Aug 2016 02:00:01 GMT","direccionRegistrada":"","tipoInfraccion":0,"montoAPagar":"$1500","existeAcarreo":true}
,{"id":7,"fechaHoraRegistro":"Sun, 18 Sep 2016 18:18:01 GMT","fechaHoraActualizacion":"Sun, 18 Sep 2016 18:18:01 GMT","direccionRegistrada":"","tipoInfraccion":1,"montoAPagar":"$200","existeAcarreo":false}
,{}]
,"version":{"id":"0.0.1","name":"meteor","lastupdate":1476717741559}}
*/
