let contadorAlunos = 1;


function adicionarAluno() {
    let listaAlunos = document.getElementById("lista");
    let aluno = prompt('Adicionar Aluno:');
    let idade = Number(prompt('Idade do aluno:'));
    let novoAluno = document.createElement("li");
    novoAluno.textContent = aluno + " - " + idade + ' anos';
    listaAlunos.appendChild(novoAluno);

    contadorAlunos++;

    if (contadorAlunos > 5) {
        alert("Alunos adicionados");

        
        let media = calcularMediaIdade();

        
        let mediaElement = document.querySelector(".media");
        mediaElement.textContent = "A média de idade da turma é " + media.toFixed(2) + " anos.";

      
        determinarCategoria(media);
    }
}

function calcularMediaIdade() {
    let somaIdade = 0;
    let contadorPessoas = 0;
    let itensLista = document.querySelectorAll("#lista li");

    itensLista.forEach(item => {
        let textoItem = item.textContent;
        let idade = parseInt(textoItem.split("-")[1]);
        somaIdade += idade;
        contadorPessoas++;
    });

    return somaIdade / contadorPessoas;
}

function determinarCategoria(media) {
    let categoria = "";

    if (media >= 0 && media <= 25) {
        categoria = "jovem";
    } else if (media >= 26 && media <= 60) {
        categoria = "adulta";
    } else {
        categoria = "idosa";
    }

    let categoriaElement = document.querySelector(".categoria");
    categoriaElement.textContent = "A turma é " + categoria + ".";
}