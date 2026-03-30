# Digital Store Backend

Backend de uma aplicação de e-commerce desenvolvido em Node.js, utilizando arquitetura em camadas e integração com banco de dados relacional via Sequelize.

---

## Visão Geral

Este projeto fornece uma API RESTful para gerenciamento de usuários, categorias e produtos, incluindo autenticação baseada em JWT e documentação interativa com Swagger.

---

## Tecnologias Utilizadas

- Node.js  
- Express  
- Sequelize (ORM)  
- PostgreSQL (via pg)  
- JWT (JSON Web Token)  
- Bcrypt (hash de senhas)  
- Swagger (documentação da API)  
- Jest + Supertest (testes)  
- Nodemon (ambiente de desenvolvimento)  

---

## 📂 Estrutura do Projeto

```bash
src/
├── config/
│   └── database.js
├── controllers/
│   ├── AuthController.js
│   ├── CategoryController.js
│   ├── ProductController.js
│   └── UserController.js
├── database/
│   └── index.js
├── middleware/
│   └── auth.js
├── models/
│   ├── Category.js
│   ├── Product.js
│   ├── ProductImage.js
│   ├── ProductOption.js
│   └── User.js
├── routes/
│   ├── categoryRoutes.js
│   ├── productRoutes.js
│   └── userRoutes.js
├── services/
│   └── ProductService.js
├── app.js
└── server.js
```
---

## Funcionalidades

- Autenticação de usuários com JWT  
- Cadastro e gerenciamento de usuários  
- CRUD de categorias  
- CRUD de produtos  
- Relacionamento entre produtos, imagens e opções  
- Middleware de proteção de rotas  
- Documentação automática com Swagger  

---

## Instalação

### Pré-requisitos

- Node.js (v18+ recomendado)  
- PostgreSQL

### Passos

#### Clone o repositório

```bash
git clone <repo-url>
cd digital-store-backend
```

### Instale as dependências

```bash
npm install
```
---

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3001
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
JWT_SECRET=sua_chave_secreta

Execução
npm run dev

Ou em produção:

```bash
npm start
```
---

## Banco de Dados

database.connection.sync({ alter: true })

⚠️ Atenção: o uso de alter: true pode modificar tabelas existentes.
Em produção, recomenda-se uso de migrations.

---

## Documentação da API

Disponível em:

http://localhost:3001/api-docs

### Inclui:

Endpoints disponíveis
Métodos HTTP
Parâmetros
Autenticação via Bearer Token

---

## Scripts Disponíveis
```bash
npm start     # Inicia o servidor
npm run dev   # Inicia com nodemon
npm test      # Executa testes com Jest
```
---

## Autenticação

Envie o token no header:

Authorization: Bearer <seu_token>

Rotas protegidas utilizam middleware de autenticação.

---

## Testes

O projeto utiliza:

Jest
Supertest

---

## Execução
```bash
npm test
```
---

## Observações Técnicas

Estrutura segue separação por responsabilidade (controllers, services, models)
Uso de Swagger facilita integração com frontend e testes
Middleware centralizado para autenticação
Código preparado para expansão (ex: novos módulos)

---

## Possíveis Melhorias

Implementação de migrations com Sequelize CLI
Validação de dados (ex: Joi ou Zod)
Logs estruturados (Winston/Pino)
Dockerização do ambiente
CI/CD