DevOps Fase 2 - Projeto Node.js
📌 Descrição do Projeto

Este projeto é uma API REST de usuários desenvolvida em Node.js utilizando Express.js.

O objetivo é demonstrar práticas de DevOps, incluindo:

Integração Contínua (CI) com GitHub Actions

Entrega Contínua (CD) com deploy automatizado no pipeline

Testes automatizados com Jest e Supertest

Estrutura organizada de código (controllers, services, routes)

Pipeline CI/CD para build, testes e deploy automáticos

🎯 Objetivos

Criar uma API Node.js funcional com endpoints de usuários.

Implementar pipeline CI que automatize build e execução de testes.

Expandir a pipeline para CD, incluindo deploy automatizado.

Garantir que alterações no código sejam validadas e entregues automaticamente.

⚙️ Requisitos

Node.js v18+

npm

Git

GitHub com repositório criado

VS Code ou outro editor de código

📂 Estrutura do Projeto
devops-projeto-fase-1/
├─ src/
│   ├─ controllers/      # Controladores da API
│   ├─ routes/           # Rotas da API
│   └─ services/         # Lógica de negócio
├─ tests/                # Testes unitários e de integração
├─ .github/
│   └─ workflows/
│       └─ ci.yml        # Pipeline de CI/CD do GitHub Actions
├─ package.json
├─ package-lock.json
├─ .gitignore
└─ README.md

🚀 Instalação

Clone o repositório:

git clone https://github.com/alineibaldo/Devops.git
cd devops-projeto-fase-1


Instale as dependências:

npm install

▶️ Rodando a API
Modo produção
npm start


A API roda na porta padrão 3000 (ou process.env.PORT).
Acesse: http://localhost:3000/users

Modo desenvolvimento (hot reload)
npm run dev


Qualquer alteração no código reinicia automaticamente a API.

✅ Testes

Testes automatizados são implementados com Jest e Supertest.
Para rodar:

npm test


Gera relatório de cobertura em coverage/.

🔄 Pipeline CI/CD

Local do workflow: .github/workflows/ci.yml

Fluxo da pipeline

Checkout do código (actions/checkout@v3)

Setup Node.js (actions/setup-node@v3)

Instalação de dependências (npm ci)

Build da aplicação (npm run build)

Execução de testes (npm test)

Deploy automático (simulado nesta fase ou configurado para staging/produção)

Como funciona

Disparado em push ou pull request para a branch main.

O job deploy só roda se os testes passarem.

Nos logs da aba Actions do GitHub é possível ver cada etapa.

Em caso de falhas, o merge na branch main é bloqueado (se configurado branch protection).

📜 Scripts disponíveis
Comando	Descrição
npm start	Roda a API em produção
npm run dev	Roda a API com hot reload (Nodemon)
npm test	Executa todos os testes com cobertura
🚫 .gitignore

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

⚡ Como rodar no GitHub Actions

Faça push ou abra pull request na branch main.

A pipeline CI/CD será executada automaticamente.

Você pode acompanhar a execução na aba Actions do repositório.

O deploy ocorre após os testes passarem.

🔗 Link do repositório

👉 https://github.com/alineibaldo/Devops