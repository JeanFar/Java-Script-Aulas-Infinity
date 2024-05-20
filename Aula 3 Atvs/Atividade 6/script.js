function diaSelecionado() {
    let dia= document.getElementById ('dia').value;

    switch (dia) {
        case "1":
            document.querySelector('h1').innerText('Domingo')
            break
        
        case "2":
            document.querySelector('h1').innerText= 'Segunda-Feira'
            break

        case "3":
            document.querySelector('h1').innerText= 'Terça-Feira'
            break

        case "4":
            document.querySelector('h1').innerText= 'Quarta-Feira'
            break

        case "5":
            document.querySelector('h1').innerText= 'Quinta-feira'
            break

        case "6":
            document.querySelector('h1').innerText= 'Sexta-Feira'
            break

        case "7":
            document.querySelector('h1').innerText= 'Sábado'
            break
            
    }
}