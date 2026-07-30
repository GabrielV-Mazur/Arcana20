🎲 Arcana20

Sistema de Gerenciamento de Campanhas e Personagens para RPG de Mesa

⸻

📖 Sobre o Projeto

O Arcana20 é uma aplicação web desenvolvida como Trabalho de Conclusão de Curso (TCC), com o objetivo de aplicar conceitos modernos de desenvolvimento Full Stack utilizando Node.js, Express, MongoDB e uma interface web integrada.

O sistema foi idealizado para auxiliar jogadores e mestres de RPG de mesa no gerenciamento de personagens, usuários e mesas de campanha, oferecendo uma plataforma segura, organizada e de fácil utilização.

⸻

🎯 Objetivo

Desenvolver uma aplicação web completa contendo backend, banco de dados e frontend integrado, aplicando conceitos de:

* Arquitetura em camadas
* API REST
* Autenticação
* Autorização
* Persistência de dados
* Segurança
* CRUD completo
* Integração Frontend + Backend

⸻

📌 Tecnologias Utilizadas

Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt
* dotenv
* CORS

Frontend

* React
* TypeScript
* Tailwind CSS
* React Router
* Axios

Ferramentas

* Git
* GitHub
* Postman
* Visual Studio Code
* MongoDB Atlas

⸻

🏛 Arquitetura

O projeto segue uma arquitetura em camadas:

Cliente
    │
    ▼
Routes
    │
    ▼
Middlewares
    │
    ▼
Controllers
    │
    ▼
Services
    │
    ▼
Repositories
    │
    ▼
Models
    │
    ▼
MongoDB

Essa organização promove baixo acoplamento, reutilização de código e facilidade de manutenção.

⸻

📂 Estrutura do Projeto

src/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── storage/
└── utils/

⸻

👥 Entidades do Sistema

User

Responsável pelo gerenciamento dos usuários da plataforma.

Permite:

* Cadastro
* Login
* Atualização de dados
* Exclusão
* Controle de permissões

⸻

Character

Representa os personagens criados pelos usuários.

Permite:

* Criar personagem
* Editar personagem
* Excluir personagem
* Consultar personagem
* Listar personagens

Cada personagem pertence exclusivamente a um usuário.

⸻

Table

Representa as mesas ou campanhas de RPG.

Permite:

* Criar mesa
* Editar mesa
* Excluir mesa
* Consultar mesa
* Listar mesas

Cada mesa possui um responsável pelo seu gerenciamento.

⸻

🔐 Autenticação

O sistema utiliza autenticação baseada em JWT.

Fluxo:

1. Cadastro
2. Login
3. Geração do Token
4. Envio do Token
5. Validação em rotas protegidas

As senhas são armazenadas utilizando bcrypt.

⸻

👤 Controle de Permissões

O sistema utiliza controle de acesso baseado em papéis (RBAC).

Perfis:

* ADMIN
* MASTER
* USER

Cada perfil possui permissões específicas para acesso às funcionalidades da aplicação.

⸻

📋 Funcionalidades

Usuários

* Cadastro
* Login
* Atualização
* Exclusão
* Consulta

⸻

Personagens

* Cadastro
* Consulta
* Atualização
* Exclusão

⸻

Mesas

* Cadastro
* Consulta
* Atualização
* Exclusão

⸻

📌 Regras de Negócio

* Um usuário somente pode editar seus próprios personagens.
* Um usuário somente pode excluir seus próprios personagens.
* Apenas usuários autorizados podem acessar funcionalidades administrativas.
* Somente o responsável por uma mesa pode alterá-la ou excluí-la.
* Todas as rotas protegidas exigem autenticação via JWT.

⸻

🔒 Segurança

O sistema implementa:

* JWT
* Hash de senha com bcrypt
* Middleware de autenticação
* Controle de permissões
* Rotas protegidas
* Variáveis de ambiente
* Proteção contra acesso não autorizado

⸻

🌐 API REST

A API segue os princípios REST utilizando os métodos HTTP:

* GET
* POST
* PUT
* PATCH
* DELETE

Os recursos principais são:

* Usuários
* Personagens
* Mesas
* Autenticação

⸻

📡 Comunicação Frontend + Backend

O frontend consome a API REST utilizando requisições HTTP.

Fluxo:

Frontend
      │
      ▼
API REST
      │
      ▼
Controllers
      │
      ▼
Services
      │
      ▼
Repositories
      │
      ▼
MongoDB

⸻

🗄 Banco de Dados

O projeto utiliza MongoDB para persistência dos dados.

As principais coleções são:

* users
* characters
* tables

⸻

▶ Como Executar

Clonar o projeto

git clone <url-do-repositório>

Instalar dependências

npm install

Configurar variáveis de ambiente

Criar um arquivo .env utilizando como base o .env.example.

Executar

npm run dev

⸻

🧪 Testes

A API pode ser testada utilizando:

* Postman
* Insomnia

Recomenda-se validar:

* Cadastro
* Login
* Rotas protegidas
* CRUD de usuários
* CRUD de personagens
* CRUD de mesas

⸻

🚀 Deploy

Backend:

* Render

Frontend:

* Vercel

Banco:

* MongoDB Atlas

⸻

📚 Requisitos Atendidos

O projeto contempla os principais requisitos do TCC:

* API REST
* CRUD completo
* Banco de Dados MongoDB
* Arquitetura em camadas
* Autenticação com JWT
* Hash de senha com bcrypt
* Controle de permissões
* Middleware de autenticação
* Frontend integrado ao backend
* Separação entre frontend e backend
* Regras de negócio
* Persistência de dados
* Deploy da aplicação

⸻

👨‍💻 Autores

Projeto desenvolvido como Trabalho de Conclusão de Curso (TCC).

Desenvolvido por:

* Gabriel Mazur

⸻

📄 Licença

Projeto desenvolvido exclusivamente para fins acadêmicos.