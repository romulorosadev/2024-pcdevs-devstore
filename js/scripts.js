
// 1 - Criar a variavel para armazenar/manipular a URL/endopint
const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=notebook';

// 2 - Fazer a requisição a URL/endpoint
fetch(URL)
  // 5 - Se a respose/resposta estiver OK seus addos serão será convertidos para formato json
  .then(response => response.json())

  // 6 - Esses dados em formato json precisam executar o bloco de código
  .then(data => {

    // 7 - Criar a var products pra armazenar/manipular os resultados de data
    const products = data.results;

    // 8 - Criar a var productList pra armazenar/manipular um elemento ul no criado no dom
    const productList = document.createElement('ul');

    // 9 - Criar um loop para iterar/percorrer o objeto products (linha 7)
    products.forEach(product => {

      // 10 - Criar a variavel ListItem pra armazenar/manipular um elemento li criado no dom
      const listItem = document.createElement('li');

      // 11 - Manipular essa li através da sua var listItem inserindo o texto do acessando o title em product dentro dos dados que estão em products
      listItem.textContent = product.title;

      // 12 - Manipular a ul através da sua var productList (linha 8) inserindo dentro dela um elemento filho, no caso a li atraves da sua var listItem;
      productList.appendChild(listItem);
    });

    // 13 - Capturar o elemento .productList para inserir productList
    document.querySelector('.product-list').appendChild(productList);
  })

  // 3 - Tratar a possibilidade de erro
  .catch(error => {
    // 4 - Exibir no console a mensagem de erro
    console.log('Erro ao obter os dados: ', error);
  });
