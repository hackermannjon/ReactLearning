# Inicia todos os serviços definidos no docker-compose.yml em modo "detached" (-d)
# e força a reconstrução das imagens (--build) para garantir que quaisquer
# alterações nos Dockerfiles sejam aplicadas.
docker-compose up --build -d
