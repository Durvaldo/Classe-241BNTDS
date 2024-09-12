function calculaImc(peso, altura) {
    altura = altura / 100
    let imc = peso / (altura * altura)
    imc = Math.floor(imc)
    return imc
}

function geraImc() {
    let altura = document.getElementById('inputAltura').value
    let peso = document.getElementById('inputPeso').value
    const imc = calculaImc(Number(peso), Number(altura))
    const mensagem = `Seu imc é: ${imc}`

    document.getElementById('resultado').innerHTML = mensagem
}