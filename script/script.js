function selecionarAssento(assento) {
    assento.classList.toggle("assento-selecionado");

    // Adicione a lógica para trocar a imagem aqui
    if (assento.classList.contains("assento-selecionado")) {
        assento.src = "components/images/assento-ocupado.png";
    } else {
        assento.src = "components/images/assento-livre.png";
    }
}

function copiarConteudo(id) {
    var conteudoParaCopiar = document.getElementById(id).innerHTML;
    localStorage.setItem('conteudoParaTransferir', conteudoParaCopiar);
    window.location.href = 'segundaTela.html';  // Redireciona para a página salas.html
}

// Recupera o conteúdo armazenado localmente
var conteudoArmazenado = localStorage.getItem('conteudoParaTransferir');

// Verifica se há conteúdo armazenado
if (conteudoArmazenado) {
    // Coloca o conteúdo na div com o ID 'filme'
    document.getElementById('filme').innerHTML = conteudoArmazenado;
    // Limpa o conteúdo armazenado localmente
    localStorage.removeItem('conteudoParaTransferir');
}