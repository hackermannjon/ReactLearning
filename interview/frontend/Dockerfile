# File: frontend/Dockerfile (Development Version)

# Use the same Node image that worked for the build
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Copy dependency files for caching
COPY package*.json ./

# Install ALL dependencies
RUN npm install

# Copy the rest of the code. The volume will keep this in sync.
COPY . .

# Vite (React dev server) runs on port 5173 by default
EXPOSE 5173

# Default command to start. Will be overridden by docker-compose.dev.yml,
# but it's good to have here.
CMD ["npm", "run", "dev"]