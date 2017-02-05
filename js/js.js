window.onload=function() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	  gestionarXml(this);
	 }

	};
	xhttp.open("GET", "xml/preguntas.xml", true);
	xhttp.send();
}
function gestionarXml(dadesXml){
 var xmlDoc = dadesXml.responseXML;
 var pregunta1=xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("quest001").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
   opcionesSelect[i] = xmlDoc.getElementById("quest001").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }
 ponerDatosSelectHtml(pregunta1,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[0].childNodes[0].nodeValue);

};


