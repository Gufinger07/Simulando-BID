$(".botao-gremio").one("click", requisicaoGet)


function requisicaoGet() {
    $.get("http://localhost:3000/json/gremio.json", adicionaConteudo)
}

function adicionaConteudo(data) {
    var conteudo = " "
    data.forEach(element => {
        var linha = document.createElement("tr")
        conteudo = `
        <tr>
            <th scope="row">${element.Id}</th>
            <td>${element.Nome}</td>
            <td>${element.Idade}</td>
        </tr>
        `
        var linhas = $("tbody")
        linhas.append(linha)
        linha.innerHTML = conteudo
        
    });  
    

    var imagensSlicker = `
        <img class="imagem" src="img/imagem12.jpg" alt="">
        <img class="imagem" src="img/vasco.webp" alt="">
        <img class="imagem" src="img/galo.jpg" alt="">
        ` 
    imagensGremio = $(".imagens").innerHTML(imagensSlicker)
    
    

}

