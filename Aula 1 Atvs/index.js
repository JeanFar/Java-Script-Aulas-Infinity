// Aula 1 
// Atividade 1 Crie um programa que peça ao usuário para digitar seu nome usando o prompt e, 
// em seguida, exiba o nome com uma frase personalizada com template string na tela usando o console.

let nome= prompt('Digite o seu nome aqui.')
console.log (nome, 'Seja bem vindo/a!')

// Atv 2 Solicite ao usuário que insira dois números usando o prompt, some esses números e exiba o resultado usando o console.
console.log ('Digite um número')
let n1= prompt()
console.log ('Digite outro número')
let n2=prompt ()
let soma= Number(n1) + Number(n2);
console.log ('A soma dos números é', soma)

// Atv 3 Peça ao usuário para digitar sua idade usando o prompt e, em seguida, 
// calcule e exiba o ano de nascimento com uma frase personalizada usando o console.

let idade= prompt('Digite sua idade');
dnasc= 2024 - Number(idade);
console.log ('Seu ano de nascimento é', dnasc);

// Atv 4 Crie um programa que solicite ao usuário que insira o raio de um círculo usando 
// o prompt e, em seguida, calcule e exiba a área do círculo usando o console.
let raio= prompt ('Insira o Raio do Círculo');
let area= Math.PI * raio * raio;
console.log= ('A área da sua circunferência é:', area);

// Atv 5 Crie um programa que solicite ao usuário que insira um valor em dólares usando o prompt. Em seguida, 
// converta esse valor para euros (1 dólar = 0,85 euros) e exiba o resultado no console.

let dolar= prompt ('Insira quantos dólares você quer converter em euros');
let euro= Number(dolar)* 0.85;
console.log ('Você obterá', euro, 'Euros');
// Porque eu tenho que colocar o + no console log? porque não tá funcionando?

// Atv 6 Peça ao usuário que insira um preço de um produto usando o prompt. 
// Em seguida, aplique um desconto de 10% a esse preço e exiba o preço com desconto no console.

let preço= prompt ('Insira o preço do seu produto:');
let pdesc= Number(preço) *0.9;
console.log ('Seu produto terá 10% de desconto e custará:', pdesc, 'Reais');

// Atv 7 Solicite ao usuário que insira um valor em metros usando o prompt e, em
// seguida, converta esse valor para centímetros (1 metro = 100 centímetros) e
// exiba o resultado no console.

let metros= prompt ('Insira um valor em metros que eu converto para centímetros:');
let cent= Number(metros) * 100;
console.log (cent+"cm");

// Desafio prático
// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
// Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 
// 5% para o sindicato, faça um programa que nos dê: 
// 1.salário bruto. 2.quanto pagou ao INSS. 3.quanto pagou ao sindicato. 4. salário liquido 5. calcule os descontos e o salário liquido

let porhora= prompt ('Quanto você ganha por hora?');
let horaspormes= prompt ('Quantas horas você trabalha por mês?');
let salariobruto= Number(porhora) * Number(horaspormes);
let inss= salariobruto * 0.08;
let sind= salariobruto * 0.05;
let salarioliq= salariobruto - 0.11 * salariobruto - 0.08 * salariobruto - 0.05 * salariobruto;
let descontos= 0.11 * salariobruto + 0.08 * salariobruto + 0.05 * salariobruto;
console.log ('Seu salário bruto é:', salariobruto+'reais');
console.log ('Seu salário líquido é:', salarioliq+'reais');
console.log ('Você pagou ao INSS:', inss+'reais');
console.log ('Você pagou ao Sindicato:', sind+'reais');
console.log ('Foram descontados ao total juntamente com seu Imposto de renda:', descontos+'reais');


