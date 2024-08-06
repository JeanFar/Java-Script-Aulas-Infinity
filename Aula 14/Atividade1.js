// Atividade 01
// Crie uma aplicação web usando JavaScript que utilize a API do GitHub para
// recuperar informações de um usuário específico e exiba o nome do
// usuário, a imagem do proprietário e a biografia do GitHub. A aplicação
// deve permitir ao usuário inserir o nome de usuário do GitHub, clicar em um
// botão para buscar os repositórios e, em seguida, exibir os dados
// recuperados em uma interface de usuário amigável.
// Link de onde encontrar API:https://api.github.com/
// Link da API: https://api.github.com/users/{seu_usuario}


document.getElementById("input-usuario").addEventListener("change", fetchGithubUser);

async function fetchGithubUser() {
    const inputUser = document.getElementById("input-usuario").value;
    const apiUrlGithub = `https://api.github.com/users/${inputUser}`;

    try {
       
        const response = await fetch(apiUrlGithub);


        if (!response.ok) {
            throw new Error(response.statusText);
        }


        const userData = await response.json();


        const container = document.getElementById('div-resposta-usuario');
        container.textContent = `Nome: ${userData.name}\nUsuário: ${userData.login}\nBio: ${userData.bio}\nPublic Repos: ${userData.public_repos}`;

    } catch (error) {
        console.error('Erro de busca:', error);


        const container = document.getElementById('div-resposta-usuario');
        container.textContent = `Erro ao buscar informações do usuário: ${error.message}`;
    }
}
