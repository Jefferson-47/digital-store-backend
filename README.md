Digital Store BackendBackend de uma aplicação de e-commerce desenvolvido em Node.js, utilizando arquitetura em camadas e integração com banco de dados relacional via Sequelize.Visão GeralEste projeto fornece uma API RESTful para gerenciamento de usuários, categorias e produtos, incluindo autenticação baseada em JWT e documentação interativa com Swagger.Tecnologias UtilizadasRuntime: Node.jsFramework: ExpressORM: SequelizeBanco de Dados: PostgreSQL (via pg)Segurança: JWT (JSON Web Token) e BcryptDocumentação: SwaggerTestes: Jest + SupertestDesenvolvimento: Nodemon📂 Estrutura do ProjetoPlaintextsrc/
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
FuncionalidadesAutenticação de usuários com JWT.Cadastro e gerenciamento de usuários.CRUD completo de categorias e produtos.Relacionamento entre produtos, imagens e opções.Middleware de proteção de rotas.Documentação automática com Swagger.InstalaçãoPré-requisitosNode.js (v18+ recomendado)PostgreSQL instalado e rodandoPassos para InstalaçãoClone o repositório:Bashgit clone https://github.com/Jefferson-47/digital-store-backend.git
cd digital-store-backend
Instale as dependências:Bashnpm install
### Configuração

Para rodar o projeto localmente, primeiro configure as variáveis de ambiente.

Crie um arquivo `.env` na raiz do projeto (mesmo local deste README).

Adicione as seguintes chaves com os valores correspondentes ao seu ambiente:

```env
PORT=3001
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
JWT_SECRET=sua_chave_secreta
ExecuçãoPara iniciar o servidor em ambiente de desenvolvimento:Bashnpm run dev
Para iniciar em modo de produção:Bashnpm start
Banco de DadosO Sequelize sincroniza automaticamente os modelos com o banco ao iniciar a aplicação:JavaScriptdatabase.connection.sync({ alter: true })
Nota: O uso de alter: true pode modificar tabelas existentes. Em ambientes de produção real, recomenda-se o uso de Migrations.Documentação da APIA documentação interativa via Swagger pode ser acessada em:http://localhost:3001/api-docsNela você encontrará:Endpoints disponíveis e métodos HTTP.Esquemas de request/response.Interface para testar a autenticação via Bearer Token.Scripts DisponíveisComandoDescriçãonpm startInicia o servidor em produção.npm run devInicia o servidor com Nodemon (Reload automático).npm testExecuta a suíte de testes com Jest.AutenticaçãoA API utiliza o padrão JWT. Para acessar rotas protegidas, envie o token no cabeçalho da requisição:PlaintextAuthorization: Bearer <seu_token_jwt>
TestesO projeto utiliza Jest e Supertest para garantir a qualidade das rotas e lógica.Para rodar os testes:Bashnpm test