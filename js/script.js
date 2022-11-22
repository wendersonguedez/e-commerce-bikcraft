// ===== Ativar Links do Menu ===== //

const links = document.querySelectorAll(".header-menu a")

// "javascript".includes("java") verifica se uma string existe dentro de outra. ==> true

function ativarLink(link) {
    const url = location.href; // url da paǵina
    const href = link.href; // href dos links
    
    // verifica se um fragmento da url está contida em href
    if (url.includes(href)) {
        link.classList.add("ativo")
    }
}

// executa a função para cada elemento de 'links'.
links.forEach(ativarLink);

// ===== Ativar Itens do Orçamento (Parâmetros URL) ===== //

// location.search retorna os parâmetros passados na URL da página. URLSearchParams() retorna um array dos parâmetros.
const parametros = new URLSearchParams(location.search);

// função que irá ativar o input dos produtos
function ativarProduto(parametro) {
    // selecionando os elementos atraves do seu id
    const elemento = document.getElementById(parametro);
    
    if (elemento) {
        // checkando o elemento selecionado
        elemento.checked = true;
    }

}

parametros.forEach(ativarProduto);

// ===== Perguntas Frequentes ===== //
const perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event) {
    // capturando qual pergunta esta sendo clicada pelo usuario
    const pergunta = event.currentTarget;

    // capturando o valor do atributo 'aria-controls'
    const controls = pergunta.getAttribute("aria-controls");
    
    const resposta = document.getElementById(controls);
    
    // adicionando a classe que exibe a resposta, caso ela não tenha sido adicionada. caso já tenha, remove a classe
    resposta.classList.toggle("ativa"); 
    
    // verifica se o elemento possui a classe 'ativa". se possui, retorna true, senão retorna false.
    const ativa = resposta.classList.contains("ativa")
    
    // alterando o valor de 'aria-expanded' com base no valor da variavel acima.
    pergunta.setAttribute("aria-expanded", ativa)
    
    console.log(ativa)
}

// para cada button de perguntas, é possivel executa a função 'ativarPergunta'
function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta)
}

perguntas.forEach(eventosPerguntas)


// ===== Galeria de Bicicletas ===== //
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
    const img = event.currentTarget;   

    // verificando se o tamanho da tela é abaixo de 1000px. se estiver baixo de 1000px, retorna 'false'.
    const media = matchMedia("(min-width: 1000px)").matches;

    // se o tamanho da tela for menor que 1000px, a função para troca de imagens não estará disponível.
    if (media) {
        // realizando a troca de posição das imagens. 'prepend' remove o elemento da sua posição e o coloca como primeiro elemento dentro do container
        galeriaContainer.prepend(img)
    }
}

function eventosGaleria (img) {
    img.addEventListener("click", trocarImagem)
}

galeria.forEach(eventosGaleria)

// ===== Plugin de Animação ===== //
if (window.SimpleAnime) {
    new SimpleAnime();
}