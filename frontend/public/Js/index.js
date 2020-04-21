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
})();