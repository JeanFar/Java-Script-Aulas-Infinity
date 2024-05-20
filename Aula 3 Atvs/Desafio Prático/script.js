let saldo = 1000;
let continuar = true;

function verSaldo() {
    document.getElementById('mensagem').innerText = `Seu saldo atual é: $${saldo.toFixed(2)}`;
}

function fazerSaque() {
    const valorSaque = prompt("Digite o valor do saque:");
    const valorNumerico = parseFloat(valorSaque);

    if (isNaN(valorNumerico) || valorNumerico <= 0) {
        document.getElementById('mensagem').innerText = "Valor inválido. Por favor, insira um valor numérico maior que zero.";
        return;
    }

    if (valorNumerico > saldo) {
        document.getElementById('mensagem').innerText = "Saldo insuficiente.";
        return;
    }

    saldo -= valorNumerico;
    document.getElementById('mensagem').innerText = `Saque de $${valorNumerico.toFixed(2)} realizado com sucesso. Seu novo saldo é: $${saldo.toFixed(2)}`;
}

function fazerDeposito() {
    const valorDeposito = prompt("Digite o valor do depósito:");
    const valorNumerico = parseFloat(valorDeposito);

    if (isNaN(valorNumerico) || valorNumerico <= 0) {
        document.getElementById('mensagem').innerText = "Valor inválido. Por favor, insira um valor numérico maior que zero.";
        return;
    }

    saldo += valorNumerico;
    document.getElementById('mensagem').innerText = `Depósito de $${valorNumerico.toFixed(2)} realizado com sucesso. Seu novo saldo é: $${saldo.toFixed(2)}`;
}

function sair() {
    document.getElementById('mensagem').innerText = "Obrigado por usar o simulador de caixa eletrônico. Até mais!";
    continuar = false;
}
