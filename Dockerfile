# Usando a versão mais recente do Node.js
FROM node:latest

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Instala o Vite globalmente
RUN npm install -g create-vite

# Exponha a porta que o Vite usa por padrão (5173)
EXPOSE 5173

# Comando padrão para iniciar o terminal interativo
CMD ["sh"]
