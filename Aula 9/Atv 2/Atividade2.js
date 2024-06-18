var btnInserir = document.getElementById("inserir-btn");


btnInserir.addEventListener('click', function() {

    var caixaTexto = document.getElementById("caixa-de-texto").value;
    
  
    var pElement = document.getElementById("texto-digitado");
    
 
    pElement.textContent = caixaTexto;
});