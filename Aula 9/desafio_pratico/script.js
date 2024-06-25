// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
// Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 
// 5% para o sindicato, faça um programa que nos dê: 
// 1.salário bruto. 2.quanto pagou ao INSS. 3.quanto pagou ao sindicato. 4. salário liquido 5. calcule os descontos e o salário liquido



document.addEventListener('DOMContentLoaded', function() {
    const btnConfirmar = document.getElementById("botao-confirmar");

    btnConfirmar.addEventListener("click", calcular);

    function calcular() {
        const ganhoHora = parseFloat(document.getElementById("ganho").value);
        const trabHora = parseFloat(document.getElementById("hora-trabalho").value);

        const salarioBrutoValor = ganhoHora * trabHora;

        const inssValor = salarioBrutoValor * 0.08;
        const sindValor = salarioBrutoValor * 0.05;

        const salarioLiqValor = salarioBrutoValor - inssValor - sindValor;
        const totalValor = inssValor + sindValor;

        const salBruto = document.getElementById("salario-bruto");
        salBruto.textContent = salarioBrutoValor.toFixed(2);

        const salLiq = document.getElementById("salario-liquido");
        salLiq.textContent = salarioLiqValor.toFixed(2);

        const inss = document.getElementById("inss");
        inss.textContent = inssValor.toFixed(2);

        const sindicato = document.getElementById("sindicato");
        sindicato.textContent = sindValor.toFixed(2);

        const total = document.getElementById("total-desconto");
        total.textContent = totalValor.toFixed(2);
    }
});





