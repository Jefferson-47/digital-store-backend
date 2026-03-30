Digital Store Backend
Backend de uma aplicação de e-commerce desenvolvido em Node.js, utilizando arquitetura em camadas e integração com banco de dados relacional via Sequelize.

Visão Geral
Este projeto fornece uma API RESTful para gerenciamento de usuários, categorias e produtos, incluindo autenticação baseada em JWT e documentação interativa com Swagger.

Tecnologias Utilizadas:
Node.js, Express, Sequelize (ORM), PostgreSQL (via pg), JWT (JSON Web Token), Bcrypt (hash de senhas), Swagger (documentação da API), Jest + Supertest (testes), Nodemon (ambiente de desenvolvimento).

📂 Estrutura do Projeto
Plaintext
src/
├── config/
│   └── database.js      # Configuração do banco de dados
├── controllers/         # Camada de controle (regras HTTP)
│   ├── AuthController.js
│   ├── CategoryController.js
│   ├── ProductController.js
│   └── UserController.js
├── database/            # Inicialização do Sequelize
│   └── index.js
├── middleware/          # Middlewares (Ex: Autenticação JWT)
│   └── auth.js
├── models/              # Modelos do Sequelize (Banco de dados)
│   ├── Category.js
│   ├── Product.js
│   ├── ProductImage.js
│   ├── ProductOption.js
│   └── User.js
├── routes/              # Definição das rotas da API
│   ├── categoryRoutes.js
│   ├── productRoutes.js
│   └── userRoutes.js
├── services/            # Camada de serviços (regras de negócio)
│   └── ProductService.js
├── app.js               # Configuração principal da aplicação
└── server.js            # Inicialização do servidor
Funcionalidades
Autenticação de usuários com JWT

Cadastro e gerenciamento de usuários

CRUD de categorias

CRUD de produtos

Relacionamento entre produtos, imagens e opções

Middleware de proteção de rotas

Documentação automática com Swagger

Instalação
Pré-requisitos
Node.js (v18+ recomendado)

PostgreSQL

Passos
Clone o repositório:
Bash
git clone <repo-url>
cd digital-store-backend
Instale as dependências:
Bash
npm install
Configuração
Para rodar o projeto localmente, primeiro configure as variáveis de ambiente.

Crie um arquivo .env na raiz do projeto (mesmo local deste README).

Adicione as seguintes chaves com os valores correspondentes ao seu ambiente:

Fragmento do código
PORT=3001
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
JWT_SECRET=sua_chave_secreta
Bash
npm run dev
Ou em modo produção:

Bash
npm start
Banco de Dados
O Sequelize sincroniza automaticamente os modelos com o banco ao iniciar a aplicação:

database.connection.sync({ alter: true })

Atenção: o uso de alter: true pode modificar tabelas existentes. Em produção, recomenda-se uso de migrations.

Documentação da API
A documentação Swagger está disponível em:

http://localhost:3001/api-docs

Inclui:

Endpoints disponíveis

Métodos HTTP

Parâmetros

Autenticação via Bearer Token

Scripts Disponíveis
npm start # Inicia o servidor

npm run dev # Inicia com nodemon

npm test # Executa testes com Jest

Autenticação
A API utiliza JWT:

Envie o token no header: Authorization: Bearer <seu_token>

Rotas protegidas utilizam middleware de autenticação.

Testes
O projeto utiliza:

Jest

Supertest

Execução:

Bash
npm test
Observações Técnicas
Estrutura segue separação por responsabilidade (controllers, services, models)

Uso de Swagger facilita integração com frontend e testes

Middleware centralizado para autenticação

Código preparado para expansão (ex: novos módulos)

Possíveis Melhorias
Implementação de migrations com Sequelize CLI

Validação de dados (ex: Joi ou Zod)

Logs estruturados (Winston/Pino)

Dockerização do ambiente

CI/CD