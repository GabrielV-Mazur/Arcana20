# Arcana20
# 🎲 Arcana20 — Backend

API REST do Arcana20, uma aplicação web voltada para o gerenciamento de personagens e mesas de RPG.

O projeto está sendo desenvolvido como Trabalho de Conclusão de Curso (TCC) do curso Preparo Técnico em TI, seguindo os requisitos técnicos e de documentação definidos pela turma Lions Dev.

---

## 📖 Sobre o Projeto

O Arcana20 tem como objetivo fornecer uma plataforma para auxiliar jogadores e mestres na organização de suas campanhas de RPG.

A aplicação busca centralizar o gerenciamento de usuários, personagens e mesas de RPG, permitindo que diferentes tipos de usuários tenham acesso a funcionalidades específicas de acordo com seu perfil.

O sistema é desenvolvido seguindo uma arquitetura baseada em API REST, com separação de responsabilidades entre rotas, controllers, services, repositories e models.

---

## 🎯 Problema

A organização de campanhas de RPG pode envolver diversas informações, como jogadores, personagens e mesas. Quando essas informações são gerenciadas de maneira descentralizada, pode ser difícil manter os dados organizados e controlar o acesso às informações de cada participante.

O Arcana20 busca solucionar esse problema por meio de uma aplicação centralizada para gerenciamento dessas informações.

---

## 💡 Solução

O Arcana20 propõe uma aplicação web integrada a uma API REST que permite o gerenciamento de usuários, personagens e mesas de RPG.

A aplicação utiliza diferentes perfis de acesso para definir as permissões dos usuários, permitindo separar as responsabilidades de administradores, mestres e jogadores.

---

## 🚀 Principais Funcionalidades

### 👤 Usuários

- Cadastro de usuários
- Autenticação de usuários
- Login
- Controle de acesso por perfil
- Gerenciamento de usuários

### 🧙 Personagens

- Criação de personagens
- Listagem de personagens
- Consulta de personagem específico
- Atualização de personagens
- Exclusão de personagens
- Associação do personagem ao usuário responsável

### 🎲 Mesas

- Criação de mesas de RPG
- Gerenciamento de mesas
- Participação de jogadores
- Associação entre mesas, jogadores e personagens

### 🔐 Autenticação e Autorização

- Autenticação de usuários
- Proteção de rotas privadas
- Controle de acesso baseado em perfil
- Perfis de usuário:
  - `ADMIN`
  - `MASTER`
  - `PLAYER`

> Algumas funcionalidades estão em desenvolvimento e serão implementadas progressivamente durante o desenvolvimento do projeto.

---

## 👥 Perfis de Usuário

### 🛡️ ADMIN

Responsável pelas funcionalidades administrativas do sistema.

O administrador possui permissões superiores às dos demais perfis, podendo realizar operações administrativas de acordo com as regras definidas pela aplicação.

---

### 🎭 MASTER

O mestre é responsável pelo gerenciamento das mesas de RPG.

Entre suas responsabilidades previstas estão:

- Criar mesas;
- Gerenciar suas mesas;
- Gerenciar a participação dos jogadores;
- Visualizar informações relacionadas às mesas;
- Acessar informações dos personagens participantes de suas mesas.

---

### 🧙 PLAYER

O jogador participa das mesas de RPG e é responsável pelo gerenciamento de seus próprios personagens.

Entre suas responsabilidades previstas estão:

- Criar seus personagens;
- Visualizar seus próprios personagens;
- Atualizar seus personagens;
- Excluir seus personagens;
- Participar de mesas;
- Visualizar informações das mesas das quais participa.

Um usuário com a role `PLAYER` não representa diretamente um personagem.

A relação planejada é:
