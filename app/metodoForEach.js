/*Executa uma ação com cada elemento do array*/
/*Elemento para inserir os livros*/
const sessaoLivros = document.querySelector('#livros');
/*Elemento para inserir o valor de todos os livros disponíveis*/
const valorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

const exibirOsLivrosNaTela = (livros) => {
    valorTotalLivrosDisponiveis.innerHTML = '';
    sessaoLivros.innerHTML = '';
    livros.forEach(livro => {
        let disponibilidade = livro.quantidade <= 0 ? 'indisponivel': '';
        sessaoLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens ${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    });
}