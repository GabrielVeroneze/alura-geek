Este projeto foi desenvolvido como parte do Challenge Front-End 3ª Edição promovido pela Alura. Ao longo de seis semanas, os participantes se dedicaram a aprimorar suas habilidades em desenvolvimento web, resultando na criação do AluraGeek, uma plataforma de e-commerce dinâmica. Este README contém informações detalhadas sobre as funcionalidades, recursos e instruções para a execução desta aplicação.

<hr>

## Índice

-   [Descrição](#descricao)
-   [Páginas e Componentes](#building_construction-páginas-e-componentes)
    -   [Página Inicial](#página-inicial)
    -   [Página de Iniciar Sessão](#página-de-iniciar-sessão)
    -   [Página do Produto](#página-do-produto)
    -   [Página de Menu do Administrador](#página-de-menu-do-administrador-administração)
    -   [Página de Cadastro de Produto](#página-de-cadastro-de-produto-administração)
-   [Funcionalidades e Recursos](#rocket-funcionalidades-e-recursos)
    -   [Gerenciamento de Produtos](#gerenciamento-de-produtos)
    -   [Login e Autenticação](#login-e-autenticação)
    -   [Exploração de Produtos](#exploração-de-produtos)
    -   [Comunicação](#comunicação)
    -   [Validações](#validações)
-   [Desenvolvimento e Implementação](#toolbox-desenvolvimento-e-implementação)
    -   [Desenvolvimento com React](#desenvolvimento-com-react)
    -   [Desenvolvimento com TypeScript](#desenvolvimento-com-typescript)
    -   [Roteamento com React Router](#roteamento-com-react-router)
    -   [Gerenciamento de Estado com Recoil](#gerenciamento-de-estado-com-recoil)
    -   [Comunicação com API via Axios](#comunicação-com-api-via-axios)
    -   [Estilização com Sass](#estilização-com-sass)
    -   [Estilização e Layout Responsivo](#estilização-e-layout-responsivo)
    -   [Utilização dos Pacotes](#utilização-dos-pacotes)
-   [Ferramentas Utilizadas](#computer-ferramentas-utilizadas)
-   [Acesso ao Projeto](#open_file_folder-acesso-ao-projeto)
-   [Instruções](#clipboard-instruções)
-   [Sobre o Challenge](#trophy-sobre-o-challenge)
    -   [O que é um Challenge?](#o-que-é-um-challenge)
    -   [História do Projeto](#história-do-projeto)
    -   [Desenvolvimento Ágil com Trello](#desenvolvimento-ágil-com-trello)

<h1 align="center" id="descricao"><img width="250px" src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/51a8f694-4c65-4163-8343-4e9a64a82328"></h1>

<p align="center">A AluraGeek é uma plataforma de e-commerce que oferece uma experiência completa de compra e gerenciamento de produtos, é especializada em produtos tecnológicos e acessórios voltados para entusiastas do universo geek.</p>

<p align="center">Oferece aos usuários a possibilidade de explorar uma variedade de produtos, cada produto apresenta uma imagem, seu nome, preço e uma descrição detalhada.</p>

<p align="center">Para os administradores, a AluraGeek disponibiliza um menu administrativo para gerenciamento de produtos, facilitando o cadastro, edição e remoção de produtos do catálogo.</p>

## :building_construction: Páginas e Componentes

### Todas as Páginas

Em todas as páginas é exibido um cabeçalho que inclui uma barra de pesquisa de produtos e um botão que redireciona para a página de iniciar sessão ou para o menu administrativo, dependendo do status de login do usuário. Além disso, apresenta um rodapé que contém vários links úteis e um formulário de contato com campos para nome, mensagem e um botão para enviar.

### Página Inicial

A página inicial é o ponto de entrada da plataforma, que se destaca como um espaço promocional e interativo para os usuários explorarem os produtos. Nesta página, os usuários podem ver produtos em destaque com descontos especiais, navegar por categorias populares e acessar listas completas de produtos clicando em "Ver tudo".

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/ce576f75-a81c-4356-b646-1297be834811" />
</details>

### Página de Iniciar Sessão

A página de iniciar sessão fornece uma interface para os usuários acessarem suas contas na AluraGeek. Esta página contém dois campos de texto onde os usuários podem inserir suas credenciais de login, especificamente seu endereço de email e senha.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/5d49d340-f2b3-437c-a2bf-871e38b6979b" />
</details>

### Página do Produto

A página do produto é onde os usuários podem obter informações detalhadas sobre um produto específico. O produto é apresentado com uma imagem grande, seguida por um título, preço do produto e uma descrição detalhada. Além disso, a página exibe uma seção de produtos relacionados, que apresenta uma variedade de produtos que podem interessar aos usuários.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/d96e25ed-1e49-4058-b9bb-0dc0db4605eb" />
</details>

### Página de Menu do Administrador (Administração)

A página de menu do administrador é onde os administradores podem gerenciar os produtos disponíveis na plataforma. Esta página exibe uma lista de todos os produtos disponíveis, cada um com opções para editar e excluir. Além disso, possui um botão que permite aos administradores adicionar novos produtos ao catálogo.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/dc3f4d62-7f93-4d98-bbe6-df07a4fc565e" />
</details>

### Página de Cadastro de Produto (Administração)

Na página de cadastro de produto os administradores têm a possibilidade de adicionar novos produtos no catálogo. Nessa página é disponibilizado um formulário completo com campos para inserir imagem, categoria, nome, preço e descrição do produto, todos precisam ser preenchidos pelo administrador. Além disso, há um botão para adicionar o produto ao catálogo.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/0d125d80-39c7-4713-bc60-3bd7a88921a0" />
</details>

## :rocket: Funcionalidades e Recursos

### Gerenciamento de Produtos

-   `Adicionar Novo Produto`: Permite que os administradores adicionem novos produtos ao catálogo da loja, incluindo informações detalhadas como imagem, categoria, nome, preço e descrição.

-   `Editar Produto`: Oferece aos administradores a capacidade de realizar alterações nos dados de produtos existentes no catálogo. Isso inclui a atualização de preços, descrições e categorias.

-   `Remover Produto`: Permite que os administradores removam produtos descontinuados ou fora de estoque do catálogo da loja quando necessário.

### Login e Autenticação

-   `Login de Usuário`: Permite acesso aos usuários autenticados na plataforma, o processo de login exige a inserção de credenciais, como e-mail e senha.

### Exploração de Produtos

-   `Pesquisa de Produtos`: Permite que os usuários realizem buscas por produtos específicos, filtrando os resultados pelo nome do produto.

-   `Lista de Produtos por Categoria`: Permite aos usuários visualizarem todos os produtos de uma categoria específica, facilitando a navegação e a busca por itens relacionados.

-   `Detalhes do Produto`: Ao acessar a página de detalhes de um produto, os usuários podem visualizar informações completas e detalhadas sobre o produto selecionado.

### Comunicação

-   `Contato`: Disponibiliza um formulário para que os usuários possam enviar mensagens de dúvidas, sugestões ou feedback.

### Validações

-   `Validações dos Formulários`: Os formulários possuem validações, quando os campos não são preenchidos corretamente são exibidas mensagens de erro que orientam os usuários sobre como corrigi-los.

## :toolbox: Desenvolvimento e Implementação

### Desenvolvimento com React

-   `Hooks`: Utiliza os Hooks do React, como `useState` e `useEffect`, para gerenciar o estado local dos componentes, realizar efeitos colaterais e interagir com o ciclo de vida dos componentes.

-   `Hooks Customizados`: Implementa hooks customizados para encapsular lógicas específicas e reutilizáveis em componentes. Eles são criados para abstrair funcionalidades, como gerenciamento de estado, efeitos colaterais e integração com APIs externas.

-   `Renderização Condicional e Mapeamento de Listas`: Utiliza renderização condicional e mapeamento de listas para exibir conteúdos de forma dinâmica com base em condições e dados de fontes externas, como listas de produtos e resultados de pesquisa.

-   `Eventos`: Implementa diversos eventos, como onChange, onKeyDown, onInvalid e onSubmit, para interagir com elementos da interface e responder às ações do usuário de forma dinâmica.

-   `Validação de Formulários`: Utiliza funcionalidades nativas de validação de formulários, como validation attributes para validar e garantir a integridade dos dados inseridos pelo usuário. Também utiliza o ValidityState para realizar validações programaticamente e fornecer feedback aos usuários sobre possíveis erros.

-   `Armazenamento Local`: Utiliza a API localStorage para armazenar dados no navegador do usuário, como os tokens de autenticação.

### Desenvolvimento com TypeScript

-   `Definições de Tipos`: Utiliza `interfaces` e `type aliases` para definir a estrutura e os tipos de dados, auxiliando a evitar erros e garantir a integridade dos dados ao longo do código.

-   `Tipos utilizados`: Utiliza tipos básicos, como `string`, `number`, `boolean`, para representar dados simples. Além disso, utiliza tipos específicos, como `HTMLInputElement`, `HTMLTextAreaElement`, `ChangeEvent`, `FormEvent`, para garantir a correta manipulação e tratamento de elementos e eventos.

-   `Recursos de Tipagem`: Explora recursos avançados de tipagem, como propriedades opcionais em interfaces e type aliases, união de tipos para lidar com diferentes tipos em uma mesma variável, asserções de tipo para garantir o tipo de uma variável e assinaturas de índice para trabalhar com objetos dinâmicos.

-   `Tipos Utilitários`: Utiliza tipos utilitários do TypeScript, como `Record` para criar tipos baseados em um conjunto de chaves e valores, e `Partial` para tornar todas as propriedades de um tipo opcional.

-   `Operadores`: Utiliza o operador de assertiva não nula `!` para garantir que determinadas variáveis não sejam nulas ou indefinidas em pontos críticos do código, aumentando a segurança e evitando erros inesperados em situações onde a presença dos dados é essencial.

### Roteamento com React Router

-   `Gerenciamento de Rotas`: Utiliza o `BrowserRouter` para definir o roteamento principal da aplicação, o `Routes` é usado para definir as diferentes rotas da aplicação e o `Route` para mapear um componente a uma rota específica.

-   `Layout Routes`: Implementa rotas aninhadas para organizar o layout da aplicação, utilizando o componente `Outlet` para renderizar o conteúdo das rotas aninhadas dentro do layout principal.

-   `Navegação`: Utiliza o componente `Link` para criar links de navegação entre as diferentes páginas da aplicação. Além disso, usa o `useNavigate` para realizar navegação programaticamente dentro dos componentes.

-   `Parâmetros de Rota`: Utiliza parâmetros de rota para criar rotas dinâmicas que aceitam valores variáveis. Esses parâmetros são acessados e utilizados através do `useParams`, para a criação de páginas com conteúdo variável baseado nos parâmetros fornecidos na URL.

-   `Acesso à Localização`: Utiliza o `useLocation` para acessar informações sobre a localização atual da aplicação, como o pathname. Com o objetivo de criar funcionalidades que dependem da localização do usuário, como a renderização de componentes com base na URL.

### Gerenciamento de Estado com Recoil

-   `Estado Global`: Utiliza `atom` e `selector` do Recoil para gerenciar o estado global da aplicação. Como o átomo de usuário que armazena informações de id, email e senha, ou o seletor de produtos pesquisados que filtra e retorna produtos com base em um termo de pesquisa.

-   `Hooks de Manipulação de Estado`: Utiliza os hooks `useRecoilState` e `useRecoilValue` para manipular e acessar o estado gerenciado pelo Recoil. Como no caso do átomo de produtos para o gerenciamento dos produtos da aplicação e no seletor de produtos pesquisados para obter os resultados da pesquisa.

### Comunicação com API via Axios

-   `Instância Personalizada`: Utiliza o `create()` para criar uma instância personalizada do Axios com configurações específicas, com baseURL e headers padrão para aceitar e enviar dados no formato JSON. Isso para organizar as requisições HTTP em diferentes partes da aplicação.

-   `Métodos HTTP`: Utiliza os métodos HTTP do Axios, como `get`, `post`, `put` e `delete`, para realizar requisições e interagir com a API RESTful. Como as requisições de login, cadastro de produto, validação de token, entre outros.

### Estilização com Sass

-   `Variáveis de Estilo`: Utiliza variáveis para armazenar valores de cores, tamanhos, fontes, entre outros. Essas variáveis são utilizadas em todo o código SCSS para facilitar a manutenção e a personalização dos estilos.

-   `Mixins`: Utiliza a diretiva `@mixin` para criar mixins que agrupam um conjunto de estilos que podem ser reutilizados em diversos elementos. Os mixins são inseridos no código utilizando `@include`, permitindo aplicar estilos específicos em vários elementos sem repetição de código.

-   `Extensão de Estilos`: Utiliza placeholder selectors para criar estilos pré-definidos que podem ser estendidos com o `@extend`. Isso para reutilizar os estilos em diferentes elementos de forma eficiente.

-   `Lógica Condicional`: Utiliza lógica condicional com `@if`e `@else` para aplicar estilos com base em condições específicas. Permitindo criar estilos dinâmicos e responsivos que se adaptam de acordo com o contexto da aplicação, como diferentes tamanhos de tela.

### Estilização e Layout Responsivo

-   `Flexbox`: Utiliza alguns dos principais atributos do Flexbox, como `flex-direction`, `flex-wrap`, `order`, entre outros, para criar layouts flexíveis e responsivos. Como na exibição dos produtos na lista flexível da página de categoria.

-   `Grid Layout`: Utiliza vários atributos do Grid Layout, como `grid-template-columns`, `grid-template-rows`, `grid-template-areas`, entre outros, para criar layouts mais complexos e organizados. Como o layout do rodapé com áreas definidas para logo, links úteis e formulário de contato.

-   `Alinhamento e Posicionamento`: Utiliza propriedades como `align-items`, `justify-content`, `position`, entre outros, para alinhar e posicionar elementos de forma precisa na página.

-   `Responsividade`: Utiliza media queries para aplicar estilos específicos com base no tamanho da tela, garantindo que a aplicação seja acessível e funcione bem em dispositivos móveis, tablets e desktops.

### Utilização dos Pacotes

-   `Servidor JSON`: Utiliza o pacote `json-server` para simular uma API RESTful localmente.

-   `Envio de E-mails`: Utiliza o pacote `@emailjs/browser` para enviar e-mails diretamente do navegador.

-   `Notificações`: Utiliza o pacote `react-toastify` para exibir notificações que informam o usuário sobre operações importantes.

-   `Formatação de Números`: Utiliza o pacote `@react-input/number-format` para criar máscaras monetárias em campos de entrada.

-   `Manipulação de Arrays`: Utiliza o pacote `just-shuffle` para embaralhar aleatoriamente elementos em um array.

-   `Identificadores Únicos`: Utiliza o pacote `nanoid` para gerar identificadores únicos de forma rápida e segura.

## :computer: Ferramentas Utilizadas

| React | TypeScript | Sass | React Router | Recoil | &nbsp; Axios &nbsp; | Vite |
| :---: | :--------: | :--: | :----------: | :----: | :-----------------: | :--: |
<img height="65px" src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/7593964e-72dd-409b-a0f7-acceab417def"> | <img height="65px" src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/4bc2aa2f-7281-42c8-8eea-d5004e0b4946"> | <img height="55px" src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/26f8f73c-0aad-4a6b-a4a8-e3188c7207f4"> | <img height="50px" src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/80312998-c88f-43e0-af5d-5099760b8788"> | <img height="65px" src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/1d6054b4-fab8-4e9b-baf7-2bb007d81b27"> | <img height="65px" src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/e16956b4-d035-4275-806f-5fdb09ed2f02"> | <img height="65px" src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/cb27ec61-e53a-4239-a580-9dfb7b52a324">

## :open_file_folder: Acesso ao Projeto

Você pode baixar o projeto diretamente:

[Baixar código fonte](https://github.com/GabrielVeroneze/alura-geek/archive/refs/heads/main.zip)

Também é possível clonar o repositório usando o seguinte comando:

```
git clone https://github.com/GabrielVeroneze/alura-geek.git
```

## :clipboard: Instruções

Para usar este projeto em seu computador localmente, você precisará seguir estas etapas:

1. Certifique-se de que o Node.js está instalado em seu computador. Caso não esteja, realize o download e a instalação a partir do site oficial:

    https://nodejs.org/

2. Abra o terminal e navegue até a pasta raiz do projeto utilizando o comando `cd`. Por exemplo:

    ```
    cd alura-geek
    ```

3. Antes de iniciar a aplicação, é necessário instalar as dependências necessárias. Execute o seguinte comando no terminal:

    ```
    npm install
    ```

    Este comando instalará todas as dependências listadas no arquivo `package.json`.

4. Após a instalação das dependências, inicie o servidor JSON Server para disponibilizar os dados da API. Utilize o seguinte comando:

    ```
    npx json-server db.json
    ```

    Isso iniciará o JSON Server na porta 3000 usando o arquivo `db.json` como banco de dados.

5. Após a inicialização do JSON Server, inicie o servidor de desenvolvimento executando o seguinte comando:

    ```
    npm run dev
    ```

    Você receberá uma mensagem com a URL de execução da aplicação, geralmente em http://localhost:5173.

## :trophy: Sobre o Challenge

O Challenge Front-End 3ª Edição proporciona uma oportunidade única para os participantes praticarem e aprimorarem seus conhecimentos em desenvolvimento web, ao mesmo tempo em que criam um novo projeto do início ao fim.

### O que é um Challenge?

O Challenge Front-End é uma abordagem baseada em desafios, onde os participantes se envolvem em um problema específico e buscam soluções por meio de cursos, conteúdos e interações. É uma simulação de um desafio real do mundo profissional, incentivando os participantes a aplicarem seus conhecimentos de forma prática e criativa.

### História do Projeto

A empresa AluraGeek está buscando expandir suas vendas criando um site para vender produtos online. Eles necessitam de uma plataforma intuitiva que permita aos clientes visualizar, selecionar e comprar produtos facilmente, ao mesmo tempo em que oferece aos administradores ferramentas eficazes para gerenciar o site de forma eficiente.

É crucial que o site seja e compatível com dispositivos móveis, tablets e computadores, para garantir uma boa experiência de compra para os clientes.

### Desenvolvimento Ágil com Trello

Durante o período de seis semanas, o projeto foi desenvolvido seguindo uma abordagem ágil, com o auxílio do Trello. Ele é utilizado para gerenciar as tarefas, desde o início até a conclusão do projeto.

Ao longo de cada semana, foram estabelecidas metas específicas, direcionando o foco e o esforço em diferentes áreas do projeto. Abaixo, estão listadas as principais tarefas de cada semana:

#### Semana 1

-   Desenvolvimento da estrutura básica da página inicial, incluindo elementos essenciais como barra de pesquisa, botão de login e banner promocional.

-   Estruturação da galeria de produtos com seções específicas para cada categoria.

-   Implementação do rodapé contendo formulário de contato e informações adicionais.

#### Semana 2

-   Estilização dos componentes e estruturação de novas seções.

-   Construção da página de login e das páginas individuais de produtos.

-   Desenvolvimento do menu administrativo e do formulário para adicionar novos produtos.

#### Semanas 3 & 4

-   Adição de funcionalidades avançadas como a integração dos dados da API para listar os produtos disponíveis.

-   Implementação das funcionalidades de visualização detalhada dos produtos e busca de produtos.

-   Realização de validações nos formulários de contato, adicionar produto e iniciar sessão.

#### Extra

-   Adição da funcionalidade de visualizar todos os produtos de uma categoria.

-   Implementação das funcionalidades de edição e remoção de produtos.
