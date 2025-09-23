DevOps Fase 2 - Projeto Node.js
📌 Descrição do Projeto
Este projeto é uma API REST de usuários desenvolvida em Node.js utilizando Express.js.
O objetivo é demonstrar práticas de DevOps, incluindo:

Integração Contínua (CI) com GitHub Actions
Entrega Contínua (CD) com deploy automatizado
Testes automatizados com Jest e Supertest
Estrutura organizada de código (controllers, services, routes)
Containerização com Docker
Pipeline CI/CD para build, testes e deploy automáticos no Docker Hub

🎯 Objetivos

Criar uma API Node.js funcional com endpoints de usuários.
Implementar pipeline CI que automatize build e execução de testes.
Expandir a pipeline para CD, incluindo deploy automatizado.
Garantir que alterações no código sejam validadas e entregues automaticamente.
Containerizar a aplicação para portabilidade e consistência.

⚙️ Requisitos

Node.js v18+
npm
Git
Docker
GitHub com repositório criado
VS Code ou outro editor de código

📂 Estrutura do Projeto
devops-projeto-fase-2/
├─ src/
│   ├─ controllers/      # Controladores da API
│   ├─ routes/           # Rotas da API
│   └─ services/         # Lógica de negócio
├─ tests/                # Testes unitários e de integração
├─ scripts/              # Scripts de deploy
│   ├─ deploy.sh        # Script para Linux/Mac
│   └─ deploy.bat       # Script para Windows
├─ .github/
│   └─ workflows/
│       └─ ci.yml        # Pipeline de CI/CD do GitHub Actions
├─ Dockerfile            # Configuração da imagem Docker
├─ docker-compose.yml    # Orquestração do serviço
├─ .dockerignore        # Exclusão de arquivos no build
├─ package.json
├─ .gitignore
└─ README.md

🚀 Instalação
Clone o repositório:
git clone https://github.com/alineibaldo/Devops.git
cd devops-projeto-fase-2

Instale as dependências:
npm install

▶️ Rodando a API

Modo produção:
npm start

A API roda na porta padrão 3000 (ou process.env.PORT). Acesse: http://localhost:3000/users

Modo desenvolvimento (hot reload):
npm run dev

Qualquer alteração no código reinicia automaticamente a API.


✅ Testes
Testes automatizados são implementados com Jest e Supertest. Para rodar:
npm test

Gera relatório de cobertura em coverage/.
🐳 Containerização com Docker
A aplicação foi containerizada para garantir portabilidade e consistência.

Dockerfile: Usa node:20-alpine, instala dependências de produção (npm ci --only=production), e executa node src/app.js.
docker-compose.yml: Mapeia a porta 3000, define NODE_ENV=production, e configura reinício automático.
.dockerignore: Exclui arquivos desnecessários (node_modules, tests, coverage, .git, .env).
Imagem publicada:
Nome: alineibaldo1/devops-fase2:latest
Digest: sha256:b2464881f8e78266c8be78794d2e67bf1115006cacc298b7626f3b60fbef93db
Link: https://hub.docker.com/r/alineibaldo1/devops-fase2



Teste local:
docker-compose up --build
curl http://localhost:3000/users

Ou com a imagem do Docker Hub:
docker pull alineibaldo1/devops-fase2:latest
docker run -p 3000:3000 alineibaldo1/devops-fase2:latest
curl http://localhost:3000/users

🚀 Scripts de Deploy com Containers

Scripts locais:

deploy.sh (Linux/Mac): Para containers existentes, constrói e inicia o serviço com docker-compose.chmod +x scripts/deploy.sh
./scripts/deploy.sh


deploy.bat (Windows): Similar, adaptado para PowerShell/CMD.scripts\deploy.bat




Pipeline CI/CD: Publica a imagem alineibaldo1/devops-fase2:latest no Docker Hub após testes passarem.


🔄 Pipeline CI/CD
Local do workflow: .github/workflows/ci.yml
Fluxo da pipeline:

Checkout do código (actions/checkout@v3)
Setup Node.js (actions/setup-node@v3)
Instalação de dependências (npm ci)
Build da aplicação (npm run build)
Execução de testes (npm test)
Login no Docker Hub (docker/login-action@v2)
Build da imagem Docker (docker build)
Push para o Docker Hub (docker push)
Deploy simulado (mensagem de sucesso)

Como funciona:

Disparado em push ou pull request para a branch main.
O job deploy só roda se os testes passarem.
Nos logs da aba Actions do GitHub, é possível ver cada etapa.
Em caso de falhas, o merge na branch main é bloqueado (se configurado branch protection).

⚡ Como rodar no GitHub Actions

Faça push ou abra pull request na branch main.
A pipeline CI/CD será executada automaticamente.
Acompanhe a execução na aba Actions do repositório: https://github.com/alineibaldo/Devops/actions.
O deploy ocorre após os testes passarem, publicando a imagem no Docker Hub.

📜 Scripts disponíveis



Comando
Descrição



npm start
Roda a API em produção


npm run dev
Roda a API com hot reload (Nodemon)


npm test
Executa todos os testes com cobertura


./deploy.sh
Deploy local com Docker (Linux/Mac)


deploy.bat
Deploy local com Docker (Windows)


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

🔗 Links do Projeto

Repositório GitHub: https://github.com/alineibaldo/Devops
Docker Hub: https://hub.docker.com/r/alineibaldo1/devops-fase2
