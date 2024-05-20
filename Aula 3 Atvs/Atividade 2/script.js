function registrar_nota() {
    var disciplinas = document.querySelectorAll(".Lista.de.notas ol");

    for (var i = 0; i < disciplinas.length; i++) {
        var disciplina = disciplinas[i].textContent;
        var nota;
        do {
            nota = prompt("Digite a nota (entre 0 e 10) para " + disciplina + ":");
            // Verifica se a nota é um número float entre 0 e 10
            if (nota !== null && nota.trim() !== "") {
                nota = parseFloat(nota);
            }
            // Verifica se a nota está dentro do intervalo válido
            if (isNaN(nota) || nota < 0 || nota > 10) {
                alert("Por favor, digite uma nota válida entre 0 e 10.");
            }
        } while (isNaN(nota) || nota < 0 || nota > 10);

        var listItem = document.createElement("li");
        listItem.textContent = "Nota: " + nota.toFixed(2); 
        disciplinas[i].appendChild(listItem);
    }

    var opcao = prompt("Digite 1 para continuar inserindo notas ou 2 para parar:");

    // Verifica a opção do usuário
    if (opcao === "1") {
        registrar_nota();
    }
}
