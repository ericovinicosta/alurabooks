const botoes = document.querySelectorAll('.btn');

const filtrarLivros = (element) => {
    const categoria = element.target.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria === categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
}

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));
