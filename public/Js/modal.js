function FecharModal(){
    $('abrirModal').style.display = 'none'
}
function AbrirModal(){
    $('abrirModal').style.display = 'block'
}

//usando evento de clique do formulario
$('send').addEventListener("click", () => {
    const name = $('nomeE').value
    const data = $('dataE').value
    const descricao = $('descricao').value

    if (!name || !data || !descricao){
        alert("preencha todos os campos")
    }else{
        event.preventDefault()

        let tr = document.createElement('tr')
        let tdNome = document.createElement('td')
        let tdData = document.createElement('td')
        let tdDescricao = document.createElement('td')

        tdData.setAttribute('class','data')

        tdNome.append(name)
        tdData.append(data)
        tdDescricao.append(descricao)

        tr.appendChild(tdNome)
        tr.appendChild(tdData)
        tr.appendChild(tdDescricao)

        FecharModal()
        $('table').append(tr)
    }
    //resetando os campos para vazio
    $('nomeE').value = "";
    $('dataE').value = "";
    $('descricao').value = "";
})