
// adiciona classe ativo no header deixando sempre marcado a margim botton no final

const links = document.querySelectorAll('.Menus a')

function Sempreativo(link) {
    const url = location.href
    const href = link.href
    
    if(url.includes(href)){
       link.classList.add('ativo')
    }
};

links.forEach(Sempreativo);

// ativar  itens do orcamento 

// seguros
const parametros = new URLSearchParams(location.search)

function ativarproduto(paramentro){
    const elemento = document.getElementById(paramentro)
    if(elemento){
    elemento.checked = true
    }
};

parametros.forEach(ativarproduto);


// perguntas freguentes

const botao = document.querySelectorAll('.perguntas button')

function ativarpergunta(event){
    const pergunta = event.currentTarget

    const controls = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(controls)

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa')
    
        
        pergunta.setAttribute('aria-expanded', ativa)

};



function botaoativo(pergunta){
    pergunta.addEventListener('click',ativarpergunta) 
};

botao.forEach(botaoativo)

// galeria de bike

const galeria = document.querySelectorAll('.bike-img img')
const galeriacontainer = document.querySelector('.bike-img')

function trocarImg(event){
    const imgem = event.currentTarget
    console.log(imgem)

}


function eventoGaleria(img) {
    img.addEventListener('click', trocarImg)
}

galeria.forEach(eventoGaleria)