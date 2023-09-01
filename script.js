const btnSortear = document.querySelector(".Sortear");
const textarea = document.querySelector("textarea");
const tagResultado = document.querySelector(".Resultado p");
const popUpResultado = document.querySelector(".Resultado")

function pegarDadosFormulario() {
    const ValorCampo = textarea.value;
    const listaNomes = ValorCampo.split(",");
    const tamanhoArray = listaNomes.length;
    const posicaoNome = gerarNomeAleatorio(tamanhoArray);
    const nome = listaNomes(posicaoNome);
    mostrarResultado(nome);

    textarea.value = ""
}
btnSortear.addEventListener("click", pegarDadosFormulario);

function gerarNomeAleatorio(tamanhoArray) {
    return Math.floor(Math.random()*(tamanhoArray - 0) + 0)
}

function mostrarResultado(nome) {
    tagResultado.innerHTML = `Resultado: $(nome)`
    popUpResultado.classList.add("mostrarResultado")
}