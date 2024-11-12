# Food Explorer - Rocketseat Explorer

Este projeto é o desafio final do curso Explorer da Rocketseat. Nomeado *Food Explorer*, ele é uma aplicação completa para um restaurante, com frontend e backend desenvolvidos com as tecnologias aprendidas ao longo da formação.

## Sobre

O *Food Explorer* é uma aplicação web para gerenciar um restaurante. Usuários podem criar uma conta e realizar login para usar as funcionalidades da aplicação. Os administradores têm acesso a ferramentas para criar, editar, visualizar e remover pratos do menu, enquanto os clientes podem visualizar e pesquisar pratos disponíveis para compra.

## Tecnologias

As principais tecnologias utilizadas no desenvolvimento deste projeto foram:

- **Frontend:** React.js, Vite, Axios, Styled Components, Swiper, React Icons, React Router Dom
- **Backend:** Node.js, Express, Nodemon, SQLite, Knex, BCryptjs, JSON Web Token, Multer, CORS
- **Linguagem:** JavaScript

## Como utilizar

Clone os repositórios para o frontend e backend do projeto:

- **Frontend:** https://github.com/igorferreira007/food-explorer-frontend.git
- **Backend:** https://github.com/igorferreira007/food-explorer-backend.git

### Configurando e Executando o Backend

1. No diretório do backend, crie um arquivo `.env` com as seguintes variáveis:

   ```plaintext
   AUTH_SECRET=seu_secret_aqui
   PORT=sua_porta_aqui
   
2. Navegue até o diretório do backend:

    ```
    $ cd food-explorer-backend
    
3. Instale as dependências:

    ```
    $ cd food-explorer-backend
    
4. Inicie o servidor do backend:

    ```
    $ npm run dev
    
### Configurando e Executando o Frontend

1. Navegue até o diretório do frontend:

   ```
   $ cd food-explorer-frontend

2. Instale as dependências:

    ```
    $ npm install
    
3. Inicie o servidor do frontend:

    ```
    $ npm run dev
    
O terminal exibirá o endereço local onde a aplicação está sendo executada. O endereço padrão para acesso é:

    http://localhost:5173/

### Usuário Admin para Testes

    E-mail: admin@email.com
    Senha: 123456

### Resultado final

O resultado final pode ser visto em: https://food-3xplorer.netlify.app/