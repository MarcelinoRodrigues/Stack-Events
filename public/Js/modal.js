const $ = query => document.getElementById(query)

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

    if (name || data || descricao){
        event.preventDefault()

        let tr = document.createElement('tr')
        let tdNome = document.createElement('td')
        let tdData = document.createElement('td')
        let tdDescricao = document.createElement('td')

        tdNome.append(name)
        tdData.append(data)
        tdDescricao.append(descricao)

        tr.appendChild(tdNome)
        tr.appendChild(tdData)
        tr.appendChild(tdDescricao)

        $('table').append(tr)

        FecharModal()
        
    }else{
        alert("preencha todos os campos")
        return false
    }
    //resetando os campos para vazio
    $('nomeE').value = "";
    $('dataE').value = "";
    $('descricao').value = "";
})