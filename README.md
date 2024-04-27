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
