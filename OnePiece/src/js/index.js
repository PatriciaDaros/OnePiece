const botoes = document.querySelectorAll('.botao');

console.log(botoes);

const personagem = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () =>{

        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("botao-selecionado");
        personagem[indice].classList.add("selecionado")

    });
})


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.botao-selecionado");
    botaoSelecionado.classList.remove("botao-selecionado");
}

