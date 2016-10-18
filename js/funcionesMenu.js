//eventos para los clicks en el menu..

$(function (){
	$("#menuServicio1").click(function (){
     $("#content").load("/views/test.html");
 });
 $("#menuServicio2").click(function (){
		 $("#content").load("/views/maps.html", function(responseTxt, statusTxt, xhr){
			 if(statusTxt == "success")
							test();
		 });
 });
 $("#menuServicio3").click(function (){
		 $("#content").load("/views/infraccionesYa.html");
 });
 $("#menuServicio4").click(function (){
		 $("#content").load("/views/maps.html", function(responseTxt, statusTxt, xhr){
			 if(statusTxt == "success")
							bootstrap();
		 });
 });
});
