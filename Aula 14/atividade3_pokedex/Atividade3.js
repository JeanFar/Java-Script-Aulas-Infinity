// Atividade 03
// Você está desenvolvendo um aplicativo que utiliza a PokéAPI para exibir
// informações sobre Pokémon. Os usuários podem pesquisar Pokémon por
// nome ou número da Pokédex.
// Link de onde encontrar API: https://pokeapi.co/docs/v2
// Link da API:https://pokeapi.co/api/v2/pokemon/{nome_pokemon}



async function fetchPokemon() {

    const inputPokemon = document.getElementById("input-pokemon").value.toLowerCase();
    const apiPokemon = `https://pokeapi.co/api/v2/pokemon/${inputPokemon}`;

    try {

        const response = await fetch(apiPokemon);
        
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const pokemonData = await response.json();

 
        const pokeImage = document.getElementById('img-pokemon');
        const urlPokeImage = pokemonData.sprites.front_default;
        pokeImage.src = urlPokeImage;

 
        const pokemonText = document.getElementById('pokemon');
        pokemonText.textContent = `ID: #${pokemonData.id} - Nome: ${pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}`;

    } catch (error) {
        console.error('Erro ao buscar informações do Pokémon:', error);

   
        const pokemonText = document.getElementById('pokemon');
        pokemonText.textContent = `Erro ao buscar informações do Pokémon ${error.message}`;


        const pokeImage = document.getElementById('img-pokemon');
        pokeImage.src = '';
    }
}


document.getElementById('fetch-button').addEventListener('click', fetchPokemon);
