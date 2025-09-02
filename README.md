DevOps Fase 1 - Projeto Node.js
Descrição do Projeto

Este projeto é uma API REST de usuários desenvolvida em Node.js utilizando Express.js.
O objetivo é demonstrar práticas de DevOps, incluindo:

Integração Contínua (CI) com GitHub Actions

Testes automatizados com Jest e Supertest

Estrutura organizada de código para API

Configuração de pipeline de CI para build e testes automáticos

Objetivos

Criar uma API Node.js funcional com endpoints de usuários.

Implementar pipeline CI que automatize build e execução de testes.

Garantir que alterações no código sejam validadas automaticamente.

Requisitos

Node.js v18+

npm

Git

GitHub com repositório criado

VS Code ou outro editor de código

Estrutura do Projeto
devops-projeto-fase-1/
├─ src/
│   ├─ controllers/      # Controladores da API
│   ├─ routes/           # Rotas da API
│   └─ services/         # Lógica de negócio
├─ tests/                # Testes unitários e de integração
├─ .github/
│   └─ workflows/
│       └─ ci.yml        # Pipeline de CI do GitHub Actions
├─ package.json
├─ package-lock.json
├─ .gitignore
└─ README.md

Instalação

Clone o repositório:

git clone https://github.com/alineibaldo/Devops.git
cd devops-projeto-fase-1


Instale as dependências:

npm install

Rodando a API
Modo produção
npm start


A API roda na porta padrão 3000 (ou process.env.PORT).

Acesse: http://localhost:3000/users

Modo desenvolvimento (hot reload)
npm run dev


Qualquer alteração no código reinicia automaticamente a API.

Testes

Testes automatizados são implementados com Jest e Supertest.

Para rodar:

npm test


Gera relatório de cobertura em coverage/.

Pipeline de Integração Contínua (CI)

Local do workflow: .github/workflows/ci.yml

Disparado em push ou pull request para a branch main

Fluxo da pipeline:

Checkout do código (actions/checkout@v3)

Setup Node.js (actions/setup-node@v3)

Instalação de dependências (npm install)

Build da aplicação (npm run build)

Execução de testes (npm test)

Logs detalhados aparecem na aba Actions do GitHub.

Se algum teste falhar, o merge na branch main é bloqueado (se configurado branch protection).

Scripts disponíveis
Comando	Descrição
npm start	Roda a API em produção
npm run dev	Roda a API com hot reload (Nodemon)
npm test	Executa todos os testes com cobertura
.gitignore

O projeto ignora arquivos e pastas desnecessárias:

node_modules/
dist/
build/
logs/
*.log
.env
.vscode/
.DS_Store
coverage/
package-lock.json

Como rodar no GitHub Actions

Faça push ou abra pull request na branch main.

A pipeline CI será executada automaticamente.

Você pode acompanhar a execução na aba Actions do repositório.

Link do repositório

https://github.com/alineibaldo/Devops