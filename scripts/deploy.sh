#!/usr/bin/env bash
set -e

IMAGE="devops-api:latest"

echo "🚀 Iniciando deploy da aplicação containerizada..."

docker-compose down || true

docker-compose up -d --build

echo "✅ Deploy finalizado com sucesso!"
