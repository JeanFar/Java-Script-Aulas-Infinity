// Atividade 01
// Escreva um programa que imprima no console os números de 0 a 10.

for (let i=0; i<11; i++) {
    console.log(i)
  }

// Atividade 02
// Escreva um programa que solicite um número inteiro e imprima a
// tabuada desse número de 1 a 10.

let numero= parseInt(prompt ('Digite um número'))

for (multiplicador=1; multiplicador<11; multiplicador ++) {
    console.log(numero * multiplicador)
}

//  Atividade 03
// Escreva um programa que solicite um número inteiro positivo e
// faça uma contagem regressiva a partir desse número até 0.

let numero= parseInt(prompt ('Digite um número'))

for (numero) {
    if numero>=0{
        console.log(numero --)
    }
}




// DESAFIO PRÁTICO
// Neste desafio, você criará um jogo simples de par ou ímpar usando loops (while), condicionais (if, else), 
// e operadores lógicos (||). Regras: O jogo continuará até que o jogador decida parar. 
// Em cada rodada, um dado será lançado. O jogador escolherá se quer apostar em " par " ou "ímpar ". O 
// resultado do dado será verificado e o vencedor será determinado com base na escolha do jogador.
let pergunta= ''
let parar= 'parar'
while (pergunta !== parar) {
    pergunta= prompt('Digite "parar" para encerrar o jogo')
    
    if (pergunta !== parar) {
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        let jogador= prompt('par ou impar?')

        if (jogador=== 'par' && numeroAleatorio%2 === 0) {
            console.log(numeroAleatorio)
            console.log ('Você venceu!')
        } 
        else if (jogador=='impar' && numeroAleatorio%2 != 0 ) {
            console.log(numeroAleatorio)
            console.log ('Você venceu!')
        }
        else {
            console.log ('Você perdeu!')
            console.log(numeroAleatorio)
        }

    } else {
        console.log ('Jogo encerrado.')
        
    }


} 