@echo off
echo 🚀 Iniciando deploy da aplicação...

docker-compose down

docker-compose up -d --build

echo ✅ Deploy finalizado com sucesso!
