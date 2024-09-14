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

    const cs = classificaImc(imc)
    const classificacao = `E sua classificacao é : ${cs}`
    document.getElementById('classificacao').innerHTML = classificacao
}

function classificaImc(imc) {
    if (imc < 18.5) {
        return 'Magreza'
    } else if (imc <= 24.9) {
        return 'Normal'
    } else if (imc <= 29.9) {
        return 'Sobrepeso'
    } else if (imc <= 38.9 ) {
        return 'Obesidade'
    } else {
        return 'Obesidade Grave'
    }
}



// ! NÃO
// != DIFERENTE
// == IGUAL
// === IGUAL E DO TIPO
// || OU
// && E