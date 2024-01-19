/*conecta ao arquivos json*/
let livros = [];
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

async function getBuscaLivrosDaApi() {
    const res = await fetch(endPointDaApi);
    livros = await res.json();
    exibirOsLivrosNaTela(livros);
}

getBuscaLivrosDaApi();