function somar() {
    var expressao = "";
    var resultado = 0;
    
    do {
        var numero = parseFloat(prompt("Digite um número diferente de 0 (ou 0 para encerrar):"));
        
        if (isNaN(numero)) {
            alert("Por favor, digite um número válido.");
            continue;
        }
        
        if (numero !== 0) {
            expressao += numero + " + ";
            resultado += numero;
            document.querySelector(".expressao").textContent = expressao;
            document.querySelector(".resultado").textContent = "Resultado: " + resultado;
        }
    } while (numero !== 0);
    
    if (expressao === "") {
        alert("Você digitou 0. Não há nada para somar.");
    }
}