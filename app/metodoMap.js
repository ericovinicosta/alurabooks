/*Executa uma ação com todos os elementos do array*/
const aplicarDesconto = livros => {
    const desconto = 0.03;
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    });
    return livrosComDesconto;
}