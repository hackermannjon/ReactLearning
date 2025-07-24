# File: backend/Dockerfile (Development Version)

# Use the slim version of Node 20, which works well
FROM node:20-slim

# Set the default working directory inside the container
WORKDIR /usr/src/app

# Copy dependency files first to leverage Docker cache
# If these files don't change, Docker won't reinstall everything
COPY package*.json ./

# Install ALL dependencies, including development ones
# (such as @nestjs/cli, ts-node, etc.) needed for hot-reload
RUN npm install

# Copy the rest of your code into the container
# The volume configured in docker-compose.yml will keep this folder
# always synchronized with your local machine
COPY . .

# Expose port 3000 so other containers can communicate with it
EXPOSE 3000

# Set the default command to start the server in development mode
# Note: This command will be overridden by the 'command' defined in
# docker-compose.yml, but it's good practice to leave it here
CMD ["npm", "run", "start:dev"]