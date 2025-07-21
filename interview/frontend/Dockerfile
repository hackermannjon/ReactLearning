# Arquivo: frontend/Dockerfile (Versão para Desenvolvimento)

# Usamos a mesma imagem Node que funcionou para o build
FROM node:20-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência para cache
COPY package*.json ./

# Instala TODAS as dependências
RUN npm install

# Copia o resto do código. O volume vai manter isso sincronizado.
COPY . .

# O Vite (servidor de dev do React) por padrão roda na porta 5173
EXPOSE 5173

# Comando padrão para iniciar. Será sobreposto pelo docker-compose.dev.yml,
# mas é bom ter aqui.
CMD ["npm", "run", "dev"]