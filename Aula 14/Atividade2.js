// Atividade 02
// Você está desenvolvendo um aplicativo de entrega de produtos online e
// precisa integrar uma API de CEP (Código de Endereçamento Postal) para
// verificar o local dos clientes. Para obter informações precisas de
// localização, a fim de otimizar o processo de entrega em um aplicativo de
// comércio eletrônico é necessário utilizar uma API de cep. Link de onde
// encontrar API: https://viacep.com.br/
// Link da API:https://viacep.com.br/ws/{seu_cep}/json/



async function fetchCep() {

    const inputCep = document.getElementById('input-cep').value

    const apiCep = `https://viacep.com.br/ws/${inputCep}/json/`

    try {
       
        const response = await fetch(apiCep);


        if (!response.ok) {
            throw new Error(response.statusText);
        }


        const cepData = await response.json();


        const container = document.getElementById('div-resposta-cep');
        container.textContent = `Informações do Cep: ${cepData}`;

    } catch (error) {
        console.error('Erro de busca:', error);


        const container = document.getElementById('div-resposta-cep');
        
        container.textContent = `Erro ao buscar informações do CEP: ${error.message}`;
    }

fetchCep()






}