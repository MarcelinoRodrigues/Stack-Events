//Pagina Inicial
//Criador Marcelino Rodrigues

document.getElementById("btnBuscar").onclick = function(){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
			document.getElementById("retorno").innerHTML = xmlHttp.responseText;
		}
	};
	xmlHttp.open("Get","curso.txt",true);
	xmlHttp.send();
}


//IFEE DATA ATUAL
(function(data = new Date()){
	var dia = data.getDate();
	var mes = data.getMonth()+1;
	var ano = data.getFullYear();

	if (dia.toString().length == 1) dia = '0'+dia;
	if (mes.toString().length == 1) mes = '0'+mes;

	console.log(dia);

	return dia+'/'+mes+'/'+ano;	
})();

//Função clique do butão
function clickButton(){
	console.log("boraaa");
}