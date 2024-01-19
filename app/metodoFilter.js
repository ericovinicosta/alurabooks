/*Filtar o array por um parametro*/
const botoes = document.querySelectorAll('.btn');

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

const getLivrosFiltrados = (categoria) => {
    return categoria === 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
}

const exibirValorTotalDosLivrosDisponiveisNaTela = () => {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(getLivrosFiltrados('disponivel'));
    valorTotalLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
          <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `;
};
const filtrarLivros = (element) => {
    const categoria = element.target.value;
    let livrosFiltrados = getLivrosFiltrados(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    categoria === 'disponivel' ? exibirValorTotalDosLivrosDisponiveisNaTela() : '';
}

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));
