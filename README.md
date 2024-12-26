# Controle Centralizado de Acesso à Estação - Backend

## Descrição
Backend de um aplicativo para controle de acesso às estações, com CRUD de usuários, estações e acessos, autenticação via JWT e envio de e-mails.

## Tecnologias
- **Node.js**
- **TypeScript**
- **Express.js**
- **Sequelize**
- **JWT**
- **dotenv**
- **Cors**
- **Body-parser**

## Funcionalidades
- Login com autenticação JWT.
- CRUD de usuários, estações e acessos.
- Envio de e-mails para redefinição de senha.

## Endpoints Principais
- `POST /login`: Autenticação de usuário.
- `GET /users`: Lista usuários.
- `POST /users`: Criação de usuário.
- `PUT /users/:id`: Atualização de usuário.
- `DELETE /users/:id`: Exclusão de usuário.
- `GET /estacoes`: Lista estações.
- `POST /estacoes`: Criação de estação.
- `GET /acessos`: Lista acessos.
- `POST /acessos`: Criação de acesso.
- `POST /redefinir`: Envio de e-mail.
