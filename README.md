<h1 align="center" id="descricao"><img width="250px" src="https://github.com/GabrielVeroneze/alura-geek/assets/95183901/51a8f694-4c65-4163-8343-4e9a64a82328"></h1>

<p align="center">A AluraGeek é uma plataforma de e-commerce que oferece uma experiência completa de compra e gerenciamento de produtos, é especializada em produtos tecnológicos e acessórios voltados para entusiastas do universo geek.</p>

<p align="center">Oferece aos usuários a possibilidade de explorar uma variedade de produtos, cada produto apresenta uma imagem, seu nome, preço e uma descrição detalhada.</p>

<p align="center">Para os administradores, a AluraGeek disponibiliza um menu administrativo para gerenciamento de produtos, facilitando o cadastro, edição e remoção de produtos do catálogo.</p>

## :building_construction: Páginas e Componentes

### Todas as Páginas

Em todas as páginas é exibido um cabeçalho que inclui uma barra de pesquisa de produtos e um botão que redireciona para a página de iniciar sessão ou para o menu administrativo, dependendo do status de login do usuário. Além disso, apresenta um rodapé que contém vários links úteis e um formulário de contato com campos para nome, mensagem e um botão para enviar.

### Página Inicial

A página inicial é o ponto de entrada da plataforma, que se destaca como um espaço promocional e interativo para os usuários explorarem os produtos. Nesta página, os usuários podem ver produtos em destaque com descontos especiais, navegar por categorias populares e acessar listas completas de produtos clicando em "Ver tudo".

[Visualizar Screenshot](#página-inicio)

### Página de Iniciar Sessão

A página de iniciar sessão fornece uma interface para os usuários acessarem suas contas na AluraGeek. Esta página contém dois campos de texto onde os usuários podem inserir suas credenciais de login, especificamente seu endereço de email e senha.

[Visualizar Screenshot](#página-iniciar-sessão)

### Página do Produto

A página do produto é onde os usuários podem obter informações detalhadas sobre um produto específico. O produto é apresentado com uma imagem grande, seguida por um título, preço do produto e uma descrição detalhada. Além disso, a página exibe uma seção de produtos relacionados, que apresenta uma variedade de produtos que podem interessar aos usuários.

[Visualizar Screenshot](#página-produto)

### Página de Resultados de Pesquisa

A página de resultados de pesquisa é onde os usuários podem visualizar os resultados de suas buscas. Esta página apresenta um texto informando a quantidade de produtos disponíveis que correspondem à pesquisa, seguido por uma lista dos produtos encontrados.

[Visualizar Screenshot](#página-resultados-de-pesquisa)

### Página de Todos os Produtos de uma Categoria

A página de todos os produtos de uma categoria é onde os usuários podem visualizar todos os produtos de uma categoria específica. Nessa página, os produtos são apresentados em formato de lista, cada produto tem uma imagem, um título descritivo, o preço e um botão que leva a mais detalhes sobre esse produto.

[Visualizar Screenshot](#página-produtos-de-uma-categoria)

### Página de Menu do Administrador (Administração)

A página de menu do administrador é onde os administradores podem gerenciar os produtos disponíveis na plataforma. Esta página exibe uma lista de todos os produtos disponíveis, cada um com opções para editar e excluir. Além disso, possui um botão que permite aos administradores adicionar novos produtos ao catálogo.

[Visualizar Screenshot](#página-menu-do-administrador)

### Página de Cadastro de Produto (Administração)

Na página de cadastro de produto os administradores têm a possibilidade de adicionar novos produtos no catálogo. Nessa página é disponibilizado um formulário completo com campos para inserir imagem, categoria, nome, preço e descrição do produto, todos precisam ser preenchidos pelo administrador. Além disso, há um botão para adicionar o produto ao catálogo.

[Visualizar Screenshot](#página-cadastro-de-produto)

## :toolbox: Desenvolvimento e Implementação

### Desenvolvimento com React

-   `Hooks`: Utiliza os Hooks do React, como `useState` e `useEffect`, para gerenciar o estado local dos componentes, realizar efeitos colaterais e interagir com o ciclo de vida dos componentes.

-   `Hooks Customizados`: Implementa hooks customizados para encapsular lógicas específicas e reutilizáveis em componentes. Eles são criados para abstrair funcionalidades, como gerenciamento de estado, efeitos colaterais e integração com APIs externas.

-   `Renderização Condicional e Mapeamento de Listas`: Utiliza renderização condicional e mapeamento de listas para exibir conteúdos de forma dinâmica com base em condições e dados de fontes externas, como listas de produtos e resultados de pesquisa.

-   `Eventos`: Implementa diversos eventos, como onChange, onKeyDown, onInvalid e onSubmit, para interagir com elementos da interface e responder às ações do usuário de forma dinâmica.

-   `Validação de Formulários`: Utiliza funcionalidades nativas de validação de formulários, como validation attributes para validar e garantir a integridade dos dados inseridos pelo usuário. Também utiliza o ValidityState para realizar validações programaticamente e fornecer feedback aos usuários sobre possíveis erros.

`Armazenamento Local`: Utiliza a API localStorage para armazenar dados no navegador do usuário, como os tokens de autenticação.

### Desenvolvimento com TypeScript

-   `Definições de Tipos`: Utiliza `interfaces` e `type aliases` para definir a estrutura e os tipos de dados, auxiliando a evitar erros e garantir a integridade dos dados ao longo do código.

-   `Tipos utilizados`: Utiliza tipos básicos, como `string`, `number`, `boolean`, para representar dados simples. Além disso, utiliza tipos específicos, como `HTMLInputElement`, `HTMLTextAreaElement`, `ChangeEvent`, `FormEvent`, para garantir a correta manipulação e tratamento de elementos e eventos.

-   `Recursos de Tipagem`: Explora recursos avançados de tipagem, como propriedades opcionais em interfaces e type aliases, união de tipos para lidar com diferentes tipos em uma mesma variável, asserções de tipo para garantir o tipo de uma variável e assinaturas de índice para trabalhar com objetos dinâmicos.

-   `Tipos Utilitários`: Utiliza tipos utilitários do TypeScript, como `Record` para criar tipos baseados em um conjunto de chaves e valores, e `Partial` para tornar todas as propriedades de um tipo opcional.

-   `Operadores`: Utiliza o operador de assertiva não nula `!` para garantir que determinadas variáveis não sejam nulas ou indefinidas em pontos críticos do código, aumentando a segurança e evitando erros inesperados em situações onde a presença dos dados é essencial.

### Roteamento com React Router



### Gerenciamento de Estado com Recoil

-   `Atoms para Estado Global`: Utiliza atoms do Recoil para gerenciar o estado global da aplicação, como os produtos, o termo de pesquisa e o usuário logado.

-   `Selectors para Computações Derivadas`: Usa selectors para calcular e derivar estados com base nos atoms existentes, como os produtos pesquisados após uma busca.

### Comunicação com API via Axios

-   `Integração com API RESTful`: Utiliza o Axios para realizar requisições HTTP e interagir com a API RESTful do backend, como as requisições de login, validação de token e logout.

## :camera: Demonstração Visual

#### `Página Inicio`
![AluraGeek](https://github.com/GabrielVeroneze/alura-geek/assets/95183901/ce576f75-a81c-4356-b646-1297be834811)

#### `Página Iniciar Sessão`
![AluraGeek](https://github.com/GabrielVeroneze/alura-geek/assets/95183901/5d49d340-f2b3-437c-a2bf-871e38b6979b)

#### `Página Produto`
![AluraGeek](https://github.com/GabrielVeroneze/alura-geek/assets/95183901/d96e25ed-1e49-4058-b9bb-0dc0db4605eb)

#### `Página Resultados de Pesquisa`
![AluraGeek](https://github.com/GabrielVeroneze/alura-geek/assets/95183901/827f5686-ab42-45e4-b2e4-a335d53bf6cc)

#### `Página Produtos de uma Categoria`
![AluraGeek](https://github.com/GabrielVeroneze/alura-geek/assets/95183901/ea264911-3eeb-4409-9cba-cb72393c1ccb)

#### `Página Menu do Administrador`
![AluraGeek](https://github.com/GabrielVeroneze/alura-geek/assets/95183901/dc3f4d62-7f93-4d98-bbe6-df07a4fc565e)

#### `Página Cadastro de Produto`
![AluraGeek](https://github.com/GabrielVeroneze/alura-geek/assets/95183901/0d125d80-39c7-4713-bc60-3bd7a88921a0)
