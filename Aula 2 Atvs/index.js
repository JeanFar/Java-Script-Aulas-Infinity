// Atv 1 Peça ao usuário para inserir um número e escreva um programa que determine se o número é positivo e par.
let n1= parseInt(prompt('Escreva um número:'));
console.log ('O seu número é:', n1);
if (n1%2==0){
    console.log ('Esse número é Par Positivo')
;}
else {
    console.log ('Esse número é Impar')
;}
if (n1>=0) {
    console.log ('Esse número é positivo')
;}
else {
    console.log ('Esse número é negativo')
;}


// Atv 2 Crie um programa que solicite ao usuário seu peso (em kg) e altura (em metros) e calcule o IMC. 
// Em seguida, informe a categoria de acordo com a tabela de IMC (por exemplo, abaixo do peso, peso normal, sobrepeso, etc.).
let peso= parseFloat(prompt('Peso(kg):'));
let altura= parseFloat(prompt('Altura(metros):'));
let imc=peso/(altura*altura);
console.log ('Seu imc é:', imc);
if (imc<16){
    console.log ('Você está com magreza grave');
}
else if (imc>=16 && imc<16.9){
    console.log('Você está com magreza moderada');
}
else if (imc>=17 && imc<=18.5){
    console.log ('Você está com magreza leve');
}
else if (imc>=18,6 && imc<=24.9){
    console.log ('Você está no Peso Ideal');
}
else if (imc>=25 && imc<=29.9){
    console.log ('Você está com sobrepeso');
}
else if (imc>=30 && imc<=34.9) {
    console.log ('Você está com obesidade grau 1');
}
else if (imc>=35 && imc<=40) {
    console.log ('Você está com obesidade grau 2');
}
else if (imc>40) {
    console.log ('Você está com obesidade grau 3');
}
else {
    console.log ('Valor incorreto');
}
//Problema de não receber valores com (,)


//Atv 3 Peça ao usuário para inserir o preço de um produto e sua idade. E calcule o preço final com desconto, 
// Se o usuário tiver menos de 18 anos, aplique um desconto de 10%. Se o usuário tiver 18 anos ou mais, não aplique desconto.

let valor= parseFloat(prompt('Insira o preço do produto:'));
let idade= parseInt(prompt('Idade:'));
let desc=valor*0.9
if (idade <18){
    console.log ('Você terá desconto de 10% e pagará:', desc+'reais')
;}
else {console.log ('Você pagará:', valor+'reais');

}

// Atv 4 Solicite ao usuário que digite uma letra. Crie um programa que determine se a letra inserida é uma vogal ou uma consoante. 
// Exiba a mensagem correspondente. Utilize estruturas condicionais para realizar essa verificação.

let letra= prompt('Digite uma letra');
if (letra=='a'|| letra=='e' || letra=='i' || letra=='o' || letra== 'u') {
    console.log ('Sua letra é uma vogal');
}
else {
    console.log ('Sua letra é consoante');
}

// Atv 5 Crie um programa que solicite um número de 1 a 7, representando o dia da semana. Use uma estrutura switch (ou equivalente) para imprimir o nome do dia correspondente.
let dia= prompt('Insira um número de 1 a 7');
if (dia=='1'){
    console.log ('Domingo');
}
else if (dia=='2'){
    console.log ('Segunda');
}
else if (dia=='3'){
    console.log ('Terça');
}
else if (dia=='4'){
    console.log ('Quarta');
}
else if (dia=='5') {
    console.log ('Quinta');
}
else if (dia=='6') {
    console.log ('Sexta');
}
else if (dia=='7') {
    console.log ('Sábado');
}

//Atv 6 Escreva um programa que solicite um número e determine se ele é um número primo.
let numero = parseInt(prompt("Digite um número:"));

let ehPrimo = numero > 1;

for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        ehPrimo = false;
        break;
    }
}

if (ehPrimo) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}



// DESAFIO PRÁTICO
// Crie um programa que apresente um menu com várias
// opções de cálculos geométricos. O usuário deve ser
// capaz de escolher uma opção e inserir os valores
// necessários para realizar o cálculo correspondente.
// Utilize condicionais para direcionar o programa com base na escolha do usuário.
// Opções do Menu:

// 1. Calcular Área do Triângulo
// 2. Calcular Área do Retângulo
// 3. Calcular Volume do Cubo
// 4. Calcular Área do Círculo
// 5. Sair

let opcao = Number(prompt('1. Triângulo, 2. Quadrilátero, 3. Cubo, 4. Círculo; E eu te digo sua Área/Volume:', 'Digite 5 para Sair.'));

let mensagem;

let basetri, alturatri, areatri, lado1, lado2, areaquad, ladocubo, volcubo, raio, areacirc;

switch (opcao) {
    case 1:
        basetri = parseFloat(prompt('Base do Triângulo:'));
        alturatri = parseFloat(prompt('Altura do Triângulo:'));
        areatri = (basetri * alturatri) / 2;
        mensagem = "A Área do Triângulo é: " + areatri;
        break;

    case 2:
        lado1 = parseFloat(prompt('Lado 1 do Quadrilátero'));
        lado2 = parseFloat(prompt('Lado 2 do Quadrilátero'));
        areaquad = lado1 * lado2;
        mensagem = "A Área do Quadrilátero é: " + areaquad;
        break;

    case 3:
        ladocubo = parseFloat(prompt('Comprimento do Cubo'));
        volcubo = ladocubo * ladocubo * ladocubo;
        mensagem = "O Volume do seu Cubo é: " + volcubo;
        break;

    case 4:
        raio = parseFloat(prompt('Insira o Raio do Círculo'));
        areacirc = Math.PI * raio * raio;
        mensagem = "A Área do seu Círculo é: " + areacirc;
        break;

    case 5:
        mensagem = "Encerrado.";
        break;
}

console.log(mensagem);

















// Atividade em sala 
// 3 notas, calcula a média e somente armazena
let n1,n2,n3, md
n1= parseFloat(prompt('Nota 1:'));
n2= parseFloat(prompt('Nota2:'));
n3= parseFloat(prompt('Nota 3:'));
md= (n1+n2+n3)/3;


// atividade em sala
// mesma coisa mas exibe o retorno
let n1,n2,n3, md
n1= parseFloat(prompt('Nota 1:'));
n2= parseFloat(prompt('Nota2:'));
n3= parseFloat(prompt('Nota 3:'));
md= (n1+n2+n3)/3;
console.log (md);