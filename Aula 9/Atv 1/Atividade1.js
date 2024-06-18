    function atualizarTexto() {
        var caixaTexto = document.getElementById("caixa-de-texto");

        var textoDigitado = caixaTexto.value;

        var textoParagrafo = document.getElementById("texto-digitado");

        textoParagrafo.innerText = textoDigitado;
    }

    atualizarTexto();

    var inputCampoTexto = document.getElementById("caixa-de-texto");

    inputCampoTexto.addEventListener('input', function() {

        atualizarTexto();

    });

