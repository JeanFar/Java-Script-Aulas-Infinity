// Atividade 01
// Escreva uma função que permita contar o número de vogais contidas
// em uma string fornecida pelo usuário. Por exemplo, o usuário informa
// a string “Beterraba” , e a função retorna o número 4 (há 4 vogais nessa palavra).
var contador = 0
function numVogais() {
  const palavra= prompt('Digite uma palavra:')
  
  for ( let x of palavra) {
   
    if (x == 'a' || x== 'e' || x== 'i' || x== 'o' || x== 'u') {
      contador+=1
    }
    

  }
}
numVogais()
console.log ('A palavra tem', contador, 'vogais')


// Atividade 02
// Implemente uma função que receba um número como parâmetro e
// informe o quadrado desse número.

function quadrado(x) {
  return x * x
}
x= parseFloat(prompt('Digite um número'))
console.log (quadrado(x))

// Atividade 03
// Escreva uma função que encontre a área e o perímetro de um círculo,
// de acordo com o raio fornecido

const pi = Math.PI; 
var r = parseFloat(prompt('Digite o raio do círculo:'));

function calculoArea(pi, r) {
  let area = pi * r * r;
  return area
}
console.log(calculoArea(pi, r));

// Atividade 04
// Escreva uma função que verifica se um número fornecido pelo usuário em
// um prompt é primo ou não.

numero= parseInt(prompt('Digite um número:'))

function verificar_primo(numero) {
  if (numero%2!== 0 && numero%3!== 0 && numero > 1 && (numero > 5 || numero%5 !== 0))  {
    console.log(`Seu número ${numero} é primo.`)
  } 
  else {console.log (`Seu número ${numero} Não é primo.`)}
}
verificar_primo(numero)


// Atividade 05
// Crie uma função anônima que simule uma calculadora básica. Ela deve
// aceitar dois números e uma operação (adição, subtração,
// multiplicação, divisão) como parâmetros e retornar o resultado.

let num1= parseFloat(prompt('Número:'))
let operador= prompt('Operador:')
let num2= parseFloat(prompt('Número:'))

let operacao= function(num1, operador, num2) {
  if (operador=== '+') {
    return num1 + num2}
  else if (operador=== '-') {
    return num1 - num2}
  else if (operador=== '*') {
    return (num1 * num2)}
  else if (operador=== '/') {
    return (num1 / num2)}
  else { console.log('Operador ou número inválido')}
  }
console.log (operacao(num1, operador, num2))

// Atividade 06
// Crie uma função anônima que aceite dois números como parâmetros e
// retorne a soma deles.
let num1= parseFloat(prompt('Número:'))
let num2= parseFloat(prompt('Número:'))

let soma= function(num1,num2) {
  return (num1 + num2)
}

console.log(soma(num1, num2))

// Atividade 07
// Faça um programa que use a função valorPagamento para determinar o
// valor a ser pago por uma prestação de uma conta. O programa deverá
// solicitar ao usuário o valor da prestação e o número de dias em atraso e
// passar estes valores para a função valorPagamento, que calculará o
// valor a ser pago e devolverá este valor ao programa que a chamou. O
// programa deverá então exibir o valor a ser pago na tela.
let valorPrestacao, diasAtraso

function valorPagamento() {
  let valorTotal= 0
  let count= 0
  while (true) {
    valorPrestacao= parseFloat(prompt('Valor da Prestação:'))
    if (valorPrestacao == 0) {break};
    diasAtraso= parseInt(prompt('Dias de atraso:'));
    count += 1

    if (diasAtraso >= 1) {
      valorTotal += (valorPrestacao + valorPrestacao* 0.03 + valorPrestacao* (diasAtraso * 0.01));
    } else {valorTotal += valorPrestacao}
  }

console.log(`Quantidade de Contas pagas: ${count}, Valor Total Pago: R$ ${valorTotal.toFixed(2)}`)
}

valorPagamento()




// DESAFIO PRÁTICO
// Faça um programa que implemente um jogo de Craps. O jogador lança um par de dados, obtendo
// um valor entre 2 e 12. Se, na primeira jogada, você
// tirar 7 ou 11, você um
// "
// natural e ganhou. Se você
// tirar 2, 3 ou 12 na primeira jogada, isto é chamado
// de"craps" e você perdeu. Se, na primeira jogada, você fez um 4, 5, 6, 8, 9 ou 10,este é seu "Ponto".
// Seu objetivo agora é continuar jogando os dados até tirar este número novamente. Você perde, no entanto, se tirar um 7 antes de tirar este Ponto novamente.
var numero= parseInt(Math.random(1,6) + Math.random(1,6))

function craps() {

    if (numero== 2 || numero== 3 || numero== 12) {
        console.log("Craps!!! Você perdeu.")
        break
    }

    else if (numero== 4 || numero== 5 || numero== 6 || numero==8 || numero== 9 || numero==10) {
        pontoCraps()

    else if (numero== 7 || numero==11) {
            console.log(`Você ganhou!!! Tirou ${numero}`)
            break
        }
    }
    else {console.log("Você Perdeu!!!")}

    }
}
craps()

function pontoCraps() {
    var seuNumero== []
    seuNumero.push(numero)
    while True {
        numero
        if numero== 7 {
            console.log(`Você tirou um ${numero} Você Perdeu!`)
        break
        }
        else if numero == seuNumero[] {
            console.log(`Você Tirou seu ${numero}. Você ganhou!!!`)
        break
        }
        else {console.log(`Você tirou um ${numero}`)
            seuNumero.push(numero)
        }
        
    }    
}

