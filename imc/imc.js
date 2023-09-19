window.addEventListener('load', function () {
    focarComponentePeloId('altura');
})

function focarComponentePeloId(idComponente) {
    document.getElementById(idComponente).focus();
}

let temaEscuro = false;

function alterarTema() {
    let body = document.body;
    if (temaEscuro) {
        body.classList.remove("tema-escuro")
    } else {
        body.classList.add("tema-escuro")
    }
    temaEscuro = !temaEscuro;
}

function confirmarLimpeza() {
    Swal.fire({
        title: 'Tem certeza?',
        text: 'Isso irá limpar todos os campos!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, limpar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            limpar();

            setTimeout(function () {
                focarComponentePeloId("altura");
            }, 300);
        }
    })
}

function calcularIMC() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso)) {
        Swal.fire({
            title: 'Erro',
            text: 'Preencha a altura e o peso corretamente.',
            icon: 'error'
        });
        return;
    }

    let imc = peso / (altura * altura);
    let resultado = `Seu IMC é ${imc.toFixed(2)}`;

    let resultadoInput = document.getElementById("resultado");
    resultadoInput.value = resultado;
    atualizarCorResultado(imc);

    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso ideal";
    } else {
        classificacao = "Acima do peso";
    }

    let classificacaoInput = document.getElementById("classificacao");
    classificacaoInput.value = classificacao;
}

function atualizarCorResultado(imc) {
    let resultadoInput = document.getElementById("resultado");
    if (imc < 18.5 || imc >= 25) {
        resultadoInput.style.color = "red";
    } else {
        resultadoInput.style.color = "black";
    }
}

function validarCampos() {
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let isValid = true;

    if (altura === "") {
        document.getElementById("altura-error").textContent = "Preenchimento obrigatório";
        isValid = false;
    } else {
        document.getElementById("altura-error").textContent = "";
    }

    if (peso === "") {
        document.getElementById("peso-error").textContent = "Preenchimento obrigatório";
        isValid = false;
    } else {
        document.getElementById("peso-error").textContent = "";
    }
    return isValid;
}

function limparErro(campo) {
    document.getElementById(campo + "-error").textContent = "";
}

function limpar() {
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("classificacao").value = "";
    document.getElementById("altura-error").textContent = "";
    document.getElementById("peso-error").textContent = "";
}
