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
											{ name: 'id' },
											 { name: 'tipoInfraccion' },
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
							//async: false,
			        data: {},
			        url: service + '/'+patente+'/infracciones/',
			        contentType: "application/json; charset=utf-8",
							//crossDomain: true,
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


/*
retorna
{"infraccionId":42,"patente":"AAA000","depositoId":1,"deposito":
{"id":1,
"nombre":"Nos llevamos su auto S.A.",
"direccion":"Av. AlláLejos",
"telefono":"555-0001",
"horarios":"09.00hs a 18.00hs"}}

*/

function getAcarreo (id)
{
	// try {
	var service = 'https://infraccionesya.herokuapp.com/api';
		source = {
		datatype: "json",
			datafields: [
									{ name: 'infraccionId' },
									 { name: 'patente' },
									 { name: 'depositoId'}
				 ]
			 };
			var url = service + '/acarreo/'+id;
			$.ajax(
			{
					cache: false,
					type: "GET",
					//async: false,
					//acarreo: {},
					url: url,
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					success: function(data) {
						console.log(data);
						drawDeposito(data.deposito)
					},
					error: function (msg) {
							alert(msg.responseText);
					}
			});
//	}
			// catch (e) {
			// 		alert('failed to call web service. Error: ' + e);
			// }

}

function drawDeposito (deposito)
{
	alert(	 deposito.nombre +
					+', Dirección'
				  + deposito.direccion
					+', Teléfono: '
					+ deposito.telefono
					+', Horarios:'
				 + deposito.horarios);
}


function dibujarMultas (data, status)
		{
			 clearTable()
			 drawHeader();
				$.each( data.infracciones,
					function(index, infraccion){
						var row = '<tr id="row"> ';
						row +=
						'<td>' + infraccion.id + '</td>'
						+'<td>' + getTipoInfraccion(infraccion.tipoInfraccion) + '</td>'
						+'<td>' + infraccion.fechaHoraRegistro + '</td>'
						+'<td>'+ infraccion.fechaHoraActualizacion + '</td>'
						+'<td>'+ infraccion.direccionRegistrada + '</td>'
						+'<td>'+ infraccion.montoAPagar + '</td>'
						+'<td>';
						 if (infraccion.existeAcarreo==true)
						 {
						 		row +='<button onClick=getAcarreo('+infraccion.id+') >Acarreo</button>';
							}
						else {
								row += 'NO'
							}
						 row += '</td>'+'</tr>';

						$("#location").append(row);
					}
				 )
			}
			function drawHeader ()
			{
				var header = '<tr>'
						+' <th>Id</th>'
						+' <th>Fecha</th>'
						+' <th>fechaHoraActualizacion</th>'
						+' <th>Dirección</th>'
						+' <th>Monto a Pagar</th>'
						+' <th>Acarreo</th>'
						+'</tr>'
					$("#location").append(header);
			}

/*
va a retornar segun el id Estacionamiento
[{"id":0,"descripcion":"Estacionamiento."}
,{"id":1,"descripcion":"Velocidad."}
,{"id":2,"descripcion":"Semáforo."}
,{"id":3,"descripcion":"Cruce Ferrocarril."}
,{"id":4,"descripcion":"Documentación Obligatoria."}
,{"id":5,"descripcion":"Otros."}]
*/
			function getTipoInfraccion (id)
			{
				 try {
					 var infraccion = "Tipo No la encontro!!!:"+id;
					 var service = 'https://infraccionesya.herokuapp.com/api';
					source = {
					datatype: "json",
						datafields: [
												{ name: 'id' },
												 { name: 'descripcion'}
							 ]
						 };
						var url = service + '/tiposInfraccion';
						$.ajax(
						{
								cache: false,
								type: "GET",
								async: false,
								data: {},
								url: url,
								contentType: "application/json; charset=utf-8",
								dataType: "json",
								success: function( data)
												{
													//var index = data.length;
													for (i = 0; i < data.length; i++)
													 {
															 if (data[i].id == id)
		 													{
		 														infraccion = data[i].descripcion;
		 													}
													 }
										 	},
								error: function (msg) {
										alert(msg.responseText);
								}
						});
				}

						 catch (e) {
						 		alert('failed to call web service. Error: ' + e);
						 }
				return infraccion;
			}
			function clearTable()
			{
				$("#location tr").remove();
			}
