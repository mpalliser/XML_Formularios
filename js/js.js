window.onload=function() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	  gestionarXml(this);
	 }

	};
	xhttp.open("GET", "xml/preguntas.xml", true);
	xhttp.send();

	function gestionarXml(dadesXml){
	var xmlDoc = dadesXml.responseXML;
	document.getElementById("rellenar1").innerHTML = xmlDoc.getElementById("quest001").getElementsByTagName("title")[0].childNodes[0].nodeValue;
	document.getElementById("rellenar2").innerHTML = xmlDoc.getElementById("quest002").getElementsByTagName("title")[0].childNodes[0].nodeValue;
	};
}
