//Pagina Inicial
//Criador Marcelino Rodrigues
(function(){
	const $ = query => document.getElementById(query)

	$('hoje').addEventListener('click', evento =>{
		const hoje = $('hoje').value;
		console.log(hoje);
	})
	$('amanha').addEventListener('click', evento =>{
		const amanha = $('amanha').value;
		console.log(amanha);
	})
	$('proximaSemana').addEventListener('click', evento =>{
		const proximaSemana = $('proximaSemana').value;
		console.log(proximaSemana);
	})
	$('all').addEventListener('click', evento =>{
		const all = $('all').value;
		console.log(all);
	})

	/*ajax teste*/
	function loadDoc() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				$("box").innerHTML = this.responseText;
			}
		};
		xhttp.open("GET", "ajax_info.txt", true);
		xhttp.send();
	  }
})();