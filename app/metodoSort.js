/*Organiza o array*/
const btnOrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco');

ordenarLivrosPorPreco = () => {
    let livrosOrdenadosPeloPreco = [];
    livrosOrdenadosPeloPreco = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenadosPeloPreco);
}

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);
