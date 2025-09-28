const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

let etapaAtual = 1;

function mostrarEtapa(numeroEtapa) {
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "none";

    let etapaAtualElem;

    if (numeroEtapa === 1) {
        etapaAtualElem = step1;
    } else if (numeroEtapa === 2) {
        etapaAtualElem = step2;
    } else {
        etapaAtualElem = step3;
    }

    etapaAtualElem.style.display = "flex";

}

function proxEtapa() {
    if (etapaAtual < 3) {
        etapaAtual++;
        mostrarEtapa(etapaAtual);
    } else {
        alert("Cadastro finalizado com sucesso!");
    }
}

function voltarEtapa() {
    if (etapaAtual > 1) {
        etapaAtual--;
        mostrarEtapa(etapaAtual);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarEtapa(1);
});