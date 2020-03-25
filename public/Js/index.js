//Pagina Inicial
//Criador Marcelino Rodrigues

//IIFE DATA ATUAL
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