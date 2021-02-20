import { clienteService } from '../service/cliente-service.js'
const criaNovaLinha = (nome, jogador, id) =>  { 
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
    <tr>
        <th scope="row">${id}</th>
        <td>${nome}</td>
        <td>${jogador}</td>
        <td class="botao_editar"><a href="#">Editar</a></td>
        <td class="botao_excluir"><a href="#">Excluir</a></td>
    </tr>
                    `
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente
  }