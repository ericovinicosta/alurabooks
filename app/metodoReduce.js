/*Reduz, acumula todos os valor do array*/
const calcularValorTotalDeLivrosDisponiveis = livros => {
    return livros.reduce((total, livro) => total + livro.preco, 0).toFixed(2);
}