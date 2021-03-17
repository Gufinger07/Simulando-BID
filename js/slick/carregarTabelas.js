$(".botao-gremio").click(requisicaoGetGremio)
$(".botao-vasco").click(requisicaoGetVasco)
$(".botao-galo").click(requisicaoGetGalo)

function requisicaoGetGremio() {
    $.get("http://localhost:3000/json/gremio.json", adicionaConteudo)
}

function requisicaoGetVasco() {
    $.get("http://localhost:3000/json/vasco.json", adicionaConteudo)
}

function requisicaoGetGalo() {
    $.get("http://localhost:3000/json/atletico.json", adicionaConteudo)
}

function adicionaConteudo(data) {
    removeConteudo()
    var novaTabela = document.createElement("tbody")
    var conteudo = " "
    
    data.forEach(element => {
        var linha = document.createElement("tr")
        conteudo = `
        <tr class = "linha">
            <th scope="row">${element.Id}</th>
            <td>${element.Nome}</td>
            <td>${element.Idade}</td>
        </tr>
        `
        var tabela = $(".table")
        novaTabela.append(linha)
        tabela.append(novaTabela)
        linha.innerHTML = conteudo
        
    });  
}

function removeConteudo() {
    var linhaRemovida = $("tbody")
    linhaRemovida.remove()
}


    




