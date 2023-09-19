window.addEventListener('load', function (){
    focarComponentePeloId('num1');
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
        if (result.isConfirmed){
            limpar();

            setTimeout(function () {
                focarComponentePeloId("num1");
            }, 300);
        }
    })
}

function atualizarCorResultado(resultado) {
    let resultadoInput = document.getElementById("resultado");
    if (resultado < 0) {
        resultadoInput.style.color = "red";
    } else {
        resultadoInput.style.color = "black";
    }
}

function formatarNumero(numero) {
    return numero.toLocaleString('pt-BR', {minimumFractionDigits: 0,
    maximumFractionDigitis: 8});
}

function validarCampos() {
    let num1= document.getElementById('num1').value;
    let num2= document.getElementById('num2').value;
    let isValid = true;
    
    if (num1 === "") {
        document.getElementById("num1-error").textContent= "Preenchimento obrigatório";
        isValid = false;
    } else {
        document.getElementById("num1-error").textContent= "";
    }
    
    if (num2 === "") {
        document.getElementById("num2-error").textContent= "Preenchimento obrigatório";
        isValid = false;
    } else {
        document.getElementById("num2-error").textContent= "";
    }
        return isValid;

}
function limparErro(campo) {
    document.getElementById(campo + "-error").textContent = "";
}

function somar() {
    if (validarCampos() === false){
            return;
    }

    let compNumero1 = document.querySelector('#num1');
    let compNumero2 = document.querySelector('#num2');

    let numero1 = parseFloat(compNumero1.value);
    let numero2 = parseFloat(compNumero2.value);

    let resultado = numero1 + numero2;

    let compResultado = document.querySelector('#resultado');
    compResultado.value = formatarNumero(resultado);
    atualizarCorResultado(resultado);
}

function subtrair() {
    if (validarCampos() === false){
        return;
}

    let compNumero1 = document.querySelector('#num1');
    let compNumero2 = document.querySelector('#num2');

    let numero1 = parseFloat(compNumero1.value);
    let numero2 = parseFloat(compNumero2.value);

    let resultado = numero1 - numero2;

    let compResultado = document.querySelector('#resultado');
    compResultado.value = formatarNumero(resultado);
    atualizarCorResultado(resultado);
}

function dividir() {
    if (validarCampos() === false){
        return;
}

    let compNumero1 = document.querySelector('#num1');
    let compNumero2 = document.querySelector('#num2');

    let numero1 = parseFloat(compNumero1.value);
    let numero2 = parseFloat(compNumero2.value);

    if (numero2 === 0) {
        document.getElementById("num2-error").textContent= "Não é possivel dividir por zero";
        return;
    }
    document.getElementById("num2-error").textContent="";
    
    let resultado = numero1 / numero2;

    let compResultado = document.querySelector('#resultado');
    compResultado.value = formatarNumero(resultado);
    atualizarCorResultado(resultado);
}

function multiplicar() {
    if (validarCampos() === false){
        return;
}

    let compNumero1 = document.querySelector('#num1');
    let compNumero2 = document.querySelector('#num2');

    let numero1 = parseFloat(compNumero1.value);
    let numero2 = parseFloat(compNumero2.value);

    let resultado = numero1 * numero2;

    let compResultado = document.querySelector('#resultado');
    compResultado.value = formatarNumero(resultado);
    atualizarCorResultado(resultado);
}

function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("num1-error").textContent = "";
    document.getElementById("num2-error").textContent = "";
}