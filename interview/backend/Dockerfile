# Arquivo: backend/Dockerfile (Versão para Desenvolvimento)

# Usamos a imagem slim do Node 20, que já está funcionando bem
FROM node:20-slim

# Define o diretório de trabalho padrão dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos de dependência primeiro para aproveitar o cache do Docker
# Se estes arquivos não mudarem, o Docker não reinstala tudo de novo
COPY package*.json ./

# Instala TODAS as dependências, incluindo as de desenvolvimento
# (como @nestjs/cli, ts-node, etc.) que são necessárias para o hot-reload.
RUN npm install

# Copia o resto do seu código para dentro do contêiner.
# O volume que configuramos no docker-compose.yml irá manter esta pasta
# sempre sincronizada com a sua máquina local.
COPY . .

# Expõe a porta 3000 para que outros contêineres possam se comunicar com ela
EXPOSE 3000

# Define o comando padrão para iniciar o servidor em modo de desenvolvimento.
# Nota: Este comando será sobreposto pelo 'command' que definimos no
# docker-compose.yml, mas é uma boa prática deixá-lo aqui.
CMD ["npm", "run", "start:dev"]