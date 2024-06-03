// Atividade 01 Faça um programa que leia 20 números inteiros
//  e armazene-os em um vetor. Armazene os números pares 
// no vetor 'PAR' e os números ímpares no vetor 'ímpar '. Imprima os três vetores.

let vetor= []
let vetorPar= [] 
let vetorImpar= []
let contador= 1
let numero
while (contador<= 20) {
    numero= parseFloat(prompt('Número:')); 
    vetor.push(numero);
    if (numero%2 == 0) {
        vetorPar.push(numero)
    } else {vetorImpar.push(numero)}
    contador+= 1} 
     
console.log (vetor)
console.log (vetorPar)
console.log (vetorImpar)

// Atividade 02
// Faça um Programa que leia um vetor de 5 números inteiros e
// mostre-os.

let vetor= [];
let contador= 0;

while (contador<5) {
    let num= parseInt(prompt('Número:'));
    vetor.push(num);
    contador += 1;
}
contador= 0
while (contador<5) {
    console.log (vetor[contador])
    contador+= 1
}


// Atividade 03 Utilizando listas, faça um programa que realize
//  5 perguntas para uma pessoa sobre um crime, ela deve responder com prompt S - Sim e N - Não. 
//  As perguntas são:
//   1 - "Telefonou para a vítima?" 
//   2 - "Esteve no local do crime?"
//    3 - "Mora perto da vítima?" 
//  4 - "Devia para a vítima?""
//   5 - "Já trabalhou com a vítima?"
//    Ao final, o programa deve emitir uma classificação sobre a participação da pessoa no crime. 
//    Se a pessoa responder positivamente a 2 questões, ela deve ser classificada como "Suspeita " ; 
//    entre 3 e 4 respostas positivas como "Cúmplice " ; e se responder positivamente a 5 questões,
//  deve ser classificada como "Assassino ". Caso contrário, será classificada como "Inocente ".

let r1, r2, r3, r4, r5, vetor

vetor= []
r1= prompt('Telefonou para a vítima? S/N')
r2= prompt('Esteve no local do crime? S/N')
r3= prompt('Mora perto da vítima? S/N')
r4= prompt('Devia para a vítima? S/N')
r5= prompt('Já trabalhou com a vítima? S/N')

vetor.push(r1, r2, r3, r4, r5)
console.log (vetor)

contador=0
crime=0

while (contador<5) {
    if (vetor[contador] === 'S' || vetor[contador] === 's') {
        crime+= 1
    }
    contador+= 1
}
if (crime== 2) {
    console.log ('Suspeita')
} else if (crime== 3 || crime== 4) {
    console.log ('Cúmplice')
} else if (crime==5) {
    console.log ('Assassino')
} else {
    console.log ('Não existe suspeita alguma')
}


// Atividade 04
// Faça um Programa que leia um vetor de 10 números reais e mostre-os na
// ordem inversa.

contador= 0
vetor= []

while (contador < 10) {
    let numero= parseFloat(prompt('Número:'))
    vetor.push(numero)
    contador += 1
}

vetor.reverse()
console.log (vetor)

// Atividade 05

// Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

contador= 0
vetor= []

while (contador < 4) {
    let nota= parseFloat(prompt('Nota:'))
    vetor.push(nota)
    contador += 1
}

let soma= 0

for (let i= 0; i< vetor.length; i++) {
    soma += vetor[i]
}

let media= parseFloat(soma / vetor.length);

console.log (media)


// Desafio Prático
// Uma empresa de pesquisas precisa tabular os resultados da seguinte enquete feita a um grande
// quantidade de organizações:
// "Qual o melhor Sistema Operacional para uso em
// servidores?" As possíveis respostas são:
// 1- Windows Server
// 2- Unix
// 3- Linux
// 4- Netware
// 5- Mac OS
// 6- Outro
// Você foi contratado para desenvolver um
// programa que leia o resultado da enquete e
// informe ao final o resultado da mesma.  o programa deverá ler os valores até ser informado
// o valor 0, que encerra a entrada dos dados. Não
// deverão ser aceitos valores além dos válidos para
// o programa (0 a 6). Os valores referentes a cada
// uma das opções devem ser armazenados num
// vetor. Após os dados terem sido completamente
// informados, o programa deverá calcular a
// percentual de cada um dos concorrentes e
// informar o vencedor da enquete. O formato da
// saída foi dado pela empresa, e é o seguinte:

let windows = 0;
let unix = 0;
let linux = 0;
let netware = 0;
let macos = 0;
let outro = 0;

let voto = parseInt(prompt('Vote 1 - Windows Server; 2 - Unix; 3 - Linux; 4 - Netware; 5 - MacOS; 6 - Outros. Digite 0 para sair'));

while (voto !== 0) {
  if (voto === 1) { windows += 1; }
  else if (voto === 2) { unix += 1; }
  else if (voto === 3) { linux += 1; }
  else if (voto === 4) { netware += 1; }
  else if (voto === 5) { macos += 1; }
  else if (voto === 6) { outro += 1; }

  voto = parseInt(prompt('Vote 1 - Windows Server; 2 - Unix; 3 - Linux; 4 - Netware; 5 - MacOS; 6 - Outros. Digite 0 para sair'));
}

let candidatos = [windows, unix, linux, netware, macos, outro];
let total = 0;

for (let i = 0; i < candidatos.length; i++) {
  total += candidatos[i];
}

console.log(Total de votos: ${total});
console.log('Sistema Operacional     Votos    %');
console.log('----------------------------------------');
console.log(Windows Server          ${windows}       ${(windows * 100 / total).toFixed(2)});
console.log(Unix                    ${unix}       ${(unix * 100 / total).toFixed(2)});
console.log(Linux                   ${linux}       ${(linux * 100 / total).toFixed(2)});
console.log(Netware                 ${netware}       ${(netware * 100 / total).toFixed(2)});
console.log(MacOS                   ${macos}       ${(macos * 100 / total).toFixed(2)});
console.log(Outros                  ${outro}       ${(outro * 100 / total).toFixed(2)});
console.log('----------------------------------------');
console.log(Total: ${total});