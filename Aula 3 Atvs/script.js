function contarRegressivamente() {
    let numero = document.getElementById('numero').value;
    numero = parseInt(numero);

    if (isNaN(numero) || numero < 0) {
        document.querySelector('#resultado').innerText = "Número Inválido! Tente novamente.";
    } else {
        document.getElementById('botao').style.visibility = 'hidden'; // Desabilita o botão
        let intervalo = setInterval(function () {
            document.querySelector('#resultado').innerText = numero;
            
            if (numero <= 0) {
                clearInterval(intervalo);
                document.querySelector('#resultado').innerText = 'Tempo esgotado!';
                document.getElementById('botao').style.visibility= 'visible'; // Habilita o botão
            }
            numero--;
        }, 1000);
    }
}
