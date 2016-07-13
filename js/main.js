//obtener hora local

$(document).ready(function(){
	
	$(".hora").css("display", "inline-block");
	$(".fecha").css("display","inline-block");
	

	function obtenerHora(){
    
    var actual = new Date();

    var hora = actual.getHours();
    if (hora >12){
    	newHour = hora-12;hora = newHour;}
    if(hora<10){
    	document.getElementById('hora').innerHTML="0"+hora;}
    else{
    	document.getElementById('hora').innerHTML=hora;}

    var minuto = actual.getMinutes();
    if(minuto<10){
    	document.getElementById('minuto').innerHTML="0"+minuto;}
    else{
    	document.getElementById('minuto').innerHTML=minuto;}

    var segundo = actual.getSeconds();
    if(segundo<10){
    	document.getElementById('segundo').innerHTML="0"+segundo;}
    else{
    	document.getElementById('segundo').innerHTML=segundo;}

  } 
  obtenerHora();
  setInterval(function(){   obtenerHora();}, 1000);

   function obtenerFecha()
   {
   	var dias = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   	var meses= ["January", "Feubrary", "March", "April", "May", "June", "July", "August", 
   	"September", "October", "November", "Dicember"]
   	var actual = new Date();
   	document.getElementById('mes').innerHTML=meses[actual.getMonth()];
   	document.getElementById('dia').innerHTML=dias[actual.getDay() + actual.getDay()];
   	document.getElementById('anio').innerHTML=actual.getFullYear();


   }
   obtenerFecha();


//obtener hora de ciudades

var cityHours=[
    {
        ciudad: "Chicago",
        hora: -1
    },
    {
        ciudad: "Sau Paulo",
        hora: 1
    },
    {
        ciudad: "México D.F.",
        hora: -1
    },
    {
        ciudad: "Caracas",
        hora: 0
    },
    {
        ciudad: "Brasilia",
        hora: 1
    },
    {
        ciudad: "Quito",
        hora: -1
    },
    {
        ciudad: "Guayaquil",
        hora: -1
    },
    {
        ciudad: "Santa Marta",
        hora: -1
    },
    {
        ciudad: "Bogota",
        hora: -1
    }
]
function getCityHours() {
  var localHour = new Date();
  var minute = localHour.getMinutes();
  var seconds = localHour.getSeconds();
  var hour = localHour.getHours();
  var id = $(this).val();
  if(minuto<10){
    minuto = "0" + minuto
  }
  if(segundo<10){
    segundo = "0" + segundo
  }
  if($(this).is(":checked")){
    $("#place").append("<span id='" + id + "'>" + parseInt(hour+cityHours[id].hora) + " : " + minute + " : " + seconds + " " + cityHours[id].ciudad + " " + "</span></br>" )
                      $("#place").css({ 'fontSize' : '30px', 'color' : 'white', 'fontFamily' : 'Coming Soon', 'textAlign' : 'center' , 'background-color':'#484656', 'margin-top': '20px', 'margin-bottom':'10px'})
  } else {
    $("#" + id).remove();
  }
  setInterval(function(){   getCityHours();}, 1000);
}

$(".pais").click(getCityHours);

});





