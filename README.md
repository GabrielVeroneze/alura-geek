Este projeto foi desenvolvido como parte do Challenge Front-End 3ª Edição promovido pela Alura. Ao longo de quatro semanas, os participantes se dedicaram a aprimorar suas habilidades em desenvolvimento web, resultando na criação do AluraGeek, uma plataforma de e-commerce dinâmica. Este README contém informações detalhadas sobre as funcionalidades, recursos e instruções para a execução desta aplicação.

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
    -   [Tipagem com TypeScript](#tipagem-com-typescript)
    -   [Roteamento com React Router](#roteamento-com-react-router)
    -   [Gerenciamento de Estado com Recoil](#gerenciamento-de-estado-com-recoil)
    -   [Comunicação com API via Axios](#comunicação-com-api-via-axios)
    -   [Estilização com Sass](#estilização-com-sass)
    -   [Construção de Layout](#construção-de-layout)
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

A página do produto fornece informações detalhadas sobre um produto específico. O produto é apresentado com uma imagem, título, preço e descrição detalhada. Também exibe uma seção de produtos relacionados, com opções que podem interessar aos usuários.

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

Na página de cadastro, os administradores podem adicionar novos produtos ao catálogo. Nela é disponibilizado um formulário com campos para inserir imagem, categoria, nome, preço e descrição do produto, todos precisam ser preenchidos pelo administrador.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/0d125d80-39c7-4713-bc60-3bd7a88921a0" />
</details>

## :rocket: Funcionalidades e Recursos

### Gerenciamento de Produtos

-   `Adicionar Novo Produto`: Permite que os administradores adicionem novos produtos ao catálogo da loja, incluindo informações detalhadas como imagem, categoria, nome, preço e descrição.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/04fa9d2d-276a-4967-bb03-d67acc5a885b" />
    </details>

-   `Editar Produto`: Oferece aos administradores a capacidade de realizar alterações nos dados de produtos existentes no catálogo. Isso inclui a atualização de preços, descrições e categorias.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/b78d3c07-404d-4c7e-97ae-99a3d0a51614" />
    </details>

-   `Remover Produto`: Permite que os administradores removam produtos descontinuados ou fora de estoque do catálogo da loja quando necessário.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/38b8379a-ddcc-4c5f-95fc-e6d9d560e672" />
    </details>

### Login e Autenticação

-   `Login de Usuário`: Permite acesso aos usuários autenticados na plataforma, o processo de login exige a inserção de credenciais, como e-mail e senha.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/627e2024-e351-41cb-a822-e64d38b1a537" />
    </details>

### Exploração de Produtos

-   `Pesquisa de Produtos`: Permite que os usuários realizem buscas por produtos específicos, filtrando os resultados pelo nome do produto.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/2a8203ed-9629-4518-b594-4dd709603bae" />
    </details>

-   `Lista de Produtos por Categoria`: Permite aos usuários visualizarem todos os produtos de uma categoria específica, facilitando a navegação e a busca por itens relacionados.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/76a8fcff-2ce2-4f1e-a4e0-e457a0b1e4f8" />
    </details>

-   `Detalhes do Produto`: Ao acessar a página de detalhes de um produto, os usuários podem visualizar informações completas e detalhadas sobre o produto selecionado.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/130481a3-c656-401b-99b5-cb5d02e5b415" />
    </details>

### Comunicação

-   `Contato`: Disponibiliza um formulário para que os usuários possam enviar mensagens de dúvidas, sugestões ou feedback.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/26e93aa6-d942-4395-83d4-8e39f1fa3582" />
    </details>

### Validações

-   `Validações dos Formulários`: Os formulários possuem validações, quando os campos não são preenchidos corretamente são exibidas mensagens de erro que orientam os usuários sobre como corrigi-los.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/64ff61f5-93ef-4ed0-89f2-5563e8c6f5b7" />
    </details>

## :toolbox: Desenvolvimento e Implementação

### Desenvolvimento com React

-   `Hooks`: Utiliza os Hooks do React, como `useState` e `useEffect`, para gerenciar o estado local dos componentes, realizar efeitos colaterais e interagir com o ciclo de vida dos componentes.

-   `Hooks Customizados`: Implementa hooks customizados para encapsular lógicas específicas e reutilizáveis. Eles abstraem funcionalidades como gerenciamento de estado, efeitos colaterais e integração com APIs externas.

-   `Renderização Condicional e Mapeamento de Listas`: Utiliza renderização condicional e mapeamento de listas para exibir conteúdos dinamicamente, com base em condições e dados externos, como produtos e resultados de pesquisa.

-   `Eventos`: Implementa diversos eventos, como onChange, onKeyDown, onInvalid e onSubmit, para interagir com elementos da interface e responder às ações do usuário de forma dinâmica.

-   `Validação de Formulários`: Emprega validações nativas de formulários com validation attributes para garantir a integridade dos dados. Utiliza ValidityState para validações programáticas e feedback de erros aos usuários.

-   `Armazenamento Local`: Utiliza a API localStorage para armazenar dados no navegador do usuário, como os tokens de autenticação.

### Tipagem com TypeScript

-   `Definições de Tipos`: Utiliza `interfaces` e `type aliases` para definir a estrutura e os tipos de dados, auxiliando a evitar erros e garantir a integridade dos dados ao longo do código.

-   `Tipos utilizados`: Utiliza tipos básicos, como `string`, `number`, `boolean`, e tipos específicos, como `HTMLInputElement`, `FormEvent`, para manipulação precisa de elementos e eventos.

-   `Recursos de Tipagem`: Explora recursos avançados de tipagem, como propriedades opcionais, união de tipos, asserções de tipo e assinaturas de índice para objetos dinâmicos.

-   `Tipos Utilitários`: Utiliza tipos utilitários do TypeScript, como `Record` para criar tipos baseados em um conjunto de chaves e valores, e `Partial` para tornar todas as propriedades de um tipo opcional.

-   `Operadores`: Utiliza o operador de assertiva não nula `!` para garantir que variáveis não sejam nulas em pontos críticos, evitando erros e aumentando a segurança do código.

### Roteamento com React Router

-   `Gerenciamento de Rotas`: Utiliza `BrowserRouter` para o roteamento principal, `Routes` para definir rotas e `Route` para mapear componentes a rotas específicas.

-   `Layout Routes`: Implementa rotas aninhadas para organizar o layout da aplicação, utilizando o componente `Outlet` para renderizar o conteúdo das rotas aninhadas dentro do layout principal.

-   `Navegação`: Utiliza o componente `Link` para criar links de navegação entre as diferentes páginas da aplicação. Além disso, usa o `useNavigate` para realizar navegação programaticamente dentro dos componentes.

-   `Parâmetros de Rota`: Utiliza parâmetros de rota para criar rotas dinâmicas, acessados pelo hook `useParams`, permitindo conteúdo variável com base nos valores da URL.

-   `Acesso à Localização`: Utiliza o `useLocation` para acessar informações da localização atual, como o pathname, permitindo funcionalidades baseadas na URL, como renderização condicional de componentes.

### Gerenciamento de Estado com Recoil

-   `Estado Global`: Utiliza `atom` e `selector` para gerenciar o estado global, como o átomo de usuário para armazenar id, email e senha, e o seletor de produtos pesquisados para filtrar produtos com base em termos de busca.

-   `Hooks de Manipulação de Estado`: Utiliza os hooks `useRecoilState` e `useRecoilValue` para manipular e acessar o estado gerenciado pelo Recoil, como o átomo de produtos e o seletor de produtos pesquisados.

### Comunicação com API via Axios

-   `Instância Personalizada`: Utiliza o `create()` para criar uma instância personalizada do Axios com baseURL e headers para enviar e receber dados em JSON, organizando as requisições HTTP na aplicação.

-   `Métodos HTTP`: Utiliza os métodos HTTP do Axios, como `get`, `post`, `put` e `delete`, para realizar requisições e interagir com a API RESTful. Como as requisições de login, cadastro de produto, validação de token, entre outros.

### Estilização com Sass

-   `Variáveis de Estilo`: Utiliza variáveis para armazenar valores de cores, tamanhos, fontes, entre outros. Essas variáveis são utilizadas em todo o código SCSS para facilitar a manutenção e a personalização dos estilos.

-   `Mixins`: Utiliza a diretiva `@mixin` para criar estilos reutilizáveis, que são aplicados com `@include`, permitindo reaproveitar conjuntos de estilos em diferentes elementos sem repetição.

-   `Extensão de Estilos`: Utiliza placeholder selectors para criar estilos pré-definidos que podem ser estendidos com o `@extend`. Isso para reutilizar os estilos em diferentes elementos de forma eficiente.

-   `Lógica Condicional`: Utiliza lógica condicional com `@if` e `@else` para aplicar estilos baseados em condições, criando estilos dinâmicos e responsivos que se ajustam ao contexto, como tamanhos de tela.

### Construção de Layout

-   `Flexbox`: Utiliza atributos do Flexbox, como `flex-direction`, `flex-wrap`, `order`, entre outros, para criar layouts flexíveis e responsivos, como na lista de produtos da página de categoria.

-   `Grid Layout`: Utiliza atributos do Grid Layout, como `grid-template-columns`, `grid-template-rows` e `grid-template-areas`, para criar layouts organizados, como o rodapé com logo, links e formulário de contato.

-   `Alinhamento e Posicionamento`: Utiliza propriedades como `align-items`, `justify-content`, `position`, entre outros, para alinhar e posicionar elementos de forma precisa na página.

-   `Responsividade`: Utiliza media queries para aplicar estilos específicos com base no tamanho da tela, garantindo que a aplicação seja acessível e funcione bem em dispositivos móveis, tablets e desktops.

### Utilização dos Pacotes

-   `Servidor JSON`: Faz uso do pacote `json-server` para simular uma API RESTful localmente, permitindo o consumo de dados durante o desenvolvimento.

-   `Envio de E-mails`: Usa o pacote `@emailjs/browser` para enviar e-mails diretamente do navegador, simplificando a integração de funcionalidades de envio.

-   `Notificações`: Utiliza o pacote `react-toastify` para exibir notificações visuais que informam o usuário sobre operações importantes realizadas na aplicação.

-   `Formatação de Números`: Usa o pacote `@react-input/number-format` para criar máscaras monetárias em campos de entrada, facilitando a formatação de valores.

-   `Manipulação de Arrays`: Utiliza o pacote `just-shuffle` para embaralhar aleatoriamente elementos em um array, facilitando a manipulação de dados.

-   `Identificadores Únicos`: Utiliza o pacote `nanoid` para gerar identificadores únicos de forma rápida, eficiente e com alta segurança para diversas aplicações.

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

Durante o período de quatro semanas, o projeto foi desenvolvido seguindo uma abordagem ágil, com o auxílio do Trello. Ele é utilizado para gerenciar as tarefas, desde o início até a conclusão do projeto.

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
