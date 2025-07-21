# Arquivo: frontend/Dockerfile

# Estágio 1: Build - Onde o código React é transformado em arquivos estáticos
FROM node:20-slim AS build

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
# Este comando gera uma pasta 'dist' com os arquivos otimizados para produção
RUN npm run build

# Estágio 2: Serve - Onde os arquivos estáticos são servidos por um servidor web leve
# Nginx é um servidor web de alta performance, perfeito para isso
FROM nginx:stable-alpine

# Copia os arquivos da pasta 'dist' do estágio anterior para a pasta padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80, que é a porta padrão para HTTP
EXPOSE 80

# O Nginx inicia automaticamente, então não precisamos de um comando CMD