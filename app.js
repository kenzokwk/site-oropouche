let doença = document.getElementById("orov");

function exibirMensagemErro() {
    const mensagemErro = document.createElement('div');
    mensagemErro.classList.add('box');
    mensagemErro.textContent = 'Nada foi encontrado.';
    doença.appendChild(mensagemErro);
}
function search() {
   
    // Pegar o valor digitado pelo usuário
    let barraPesquisa = document.getElementById("barra-pesquisa").value
    // Inicializa uma string vazia para armazenar os resultados da busca
    let resultados = "";
    // Itera sobre cada elemento (dado) no array "dados" (não mostrado no código)
    //se a barraPesquisa for uma string vazia
    barraPesquisa = barraPesquisa.toLowerCase();
    let titulo = "";
    let texto1 = "";
    let texto2 = "";
    let texto3 = "";
    let tag = "";
    if (!barraPesquisa){
        exibirMensagemErro();
        doença.innerHTML = "<p class='box'>Digite algo válido</p>"
        return
    }
    for(let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        texto1 = dado.texto1.toLowerCase();
        texto2 = dado.texto2.toLowerCase();
        texto3 = dado.texto3.toLowerCase();
        imagem = dado.imagem.toLowerCase();
        tag = dado.tag.toLowerCase();
        if (titulo.includes(barraPesquisa) || texto1.includes(barraPesquisa) || texto2.includes(barraPesquisa) || texto3.includes(barraPesquisa) || tag.includes(barraPesquisa)) {
        resultados +=`
        <div class="texto-paragrafo">
            <h3 clas="title">${dado.titulo}</h3>
            <p>${dado.texto1}</p>
            <p>${dado.texto2}</p>
            <p>${dado.texto3}</p>
            <img src=${dado.imagem} alt=${dado.descricao} class="imagem-centralizada">
        </div>
         `;
        }            

    }
    if (!resultados) {
     exibirMensagemErro();
     resultados = "<p class='box'>Nada foi encontrado</p>"
        
    }
    // Atribui a string com os resultados ao conteúdo HTML do elemento "doença"
    doença.innerHTML = resultados;
    }
    
    
   




    


