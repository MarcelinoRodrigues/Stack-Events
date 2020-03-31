//Pagina Inicial
//Criador Marcelino Rodrigues

//se o botão for clicado
function clickButton(){
	document.querySelectorAll('input').onkeydown = function(event){
		if(event.KeyCode == 13){
			console.log("kk")
		}
	}
};
//IFEE FUNCTION
(function(){
	console.error("IFEE Persistência");
})();