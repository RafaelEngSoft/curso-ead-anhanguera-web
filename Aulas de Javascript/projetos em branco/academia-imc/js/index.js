function calcularIMC(peso, altura) {
    let resultado = Number(peso) / (Number(altura) * Number(altura))
    return resultado.toFixed(2)
}

function validarStatusIMC(valorIMC) {
    if (valorIMC < 18.5) {
        status_imc = 'Magreza'
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
        status_imc = 'Normal'
    } else if (valorIMC >= 25 && valorIMC <= 29.9) {
        status_imc = 'Sobrepeso'
    } else if (valorIMC >= 30 && valorIMC <= 39.9) {
        status_imc = 'Obesidade'
    } else {
        status_imc = 'Obesidade grave'
    }
    return status_imc
}

const botaoCalcular = document.getElementById('calcular')

botaoCalcular.addEventListener('click', function(){

    let pesoAluno = document.getElementById('peso').value
    let alturaAluno = document.getElementById('altura').value

    let valorIMC = calcularIMC(pesoAluno, alturaAluno)
    let status_imc = validarStatusIMC(Number(valorIMC))

    document.getElementById('resultado_valor_imc').innerText = valorIMC
    document.getElementById('resultado_status_imc').innerText = status_imc

})