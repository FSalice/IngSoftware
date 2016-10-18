/*
{"patente":"ABC123","infracciones":[
{"id":42,"fechaHoraRegistro":"Sat, 20 Aug 2016 02:00:01 GMT","fechaHoraActualizacion":"Sat, 20 Aug 2016 02:00:01 GMT","direccionRegistrada":"","tipoInfraccion":0,"montoAPagar":"$1500","existeAcarreo":true}
,{"id":7,"fechaHoraRegistro":"Sun, 18 Sep 2016 18:18:01 GMT","fechaHoraActualizacion":"Sun, 18 Sep 2016 18:18:01 GMT","direccionRegistrada":"","tipoInfraccion":1,"montoAPagar":"$200","existeAcarreo":false}
,{}]
,"version":{"id":"0.0.1","name":"meteor","lastupdate":1476717741559}}
*/

			function GetInfracciones(patente) {
	 		try {
			    /*jQuery.support.cors = true;*/
			var service = 'https://infraccionesya.herokuapp.com/api';
			  source = {
				datatype: "json",
			    datafields: [
			                 { name: 'fechaHoraRegistro' },
			                 { name: 'fechaHoraActualizacion' },
			                 { name: 'direccionRegistrada'},
			                 { name: 'montoAPagar'},
							 			 	 { name: 'existeAcarreo'}
						 ]
			                 };
		    	$.ajax(
			    {
			        cache: false,
			        type: "GET",
					async: false,
			        data: {},
			        url: service + '/'+patente+'/infracciones/',
			        contentType: "application/json; charset=utf-8",
					crossDomain: true,
			        dataType: "json",
			        success: dibujarMultas,
			        error: function (msg) {
			            alert(msg.responseText);
			        }
			    });
			}
	        catch (e) {
              alert('failed to call web service. Error: ' + e);
          }
		}

		function dibujarMultas (data, status)
		{
				$.each( data.infracciones,
					function(index, infraccion){
						var row = '<tr id="row"> ';

						row += '<td>' + infraccion.fechaHoraRegistro + '</td>' +
						 '<td>'+ infraccion.fechaHoraActualizacion + '</td>'
						+'<td>'+ infraccion.direccionRegistrada + '</td>'
						+'<td>'+ infraccion.montoAPagar + '</td>'
						+'<td>'+ infraccion.existeAcarreo + '</td></tr>';

						$("#location").append(row);
					}
				 )
			}
