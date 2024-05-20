function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

function processarNumero() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    
    if (isNaN(numero)) {
        resultado.innerText = 'Por favor, insira um número válido.';
        return;
    }
    
    if (isPrime(numero)) {
        resultado.innerText = 'Você digitou o número: ' + numero + '. Ele é um número primo.';
    } else {
        resultado.innerText = 'Você digitou o número: ' + numero + '. Ele não é um número primo.';
    }
}