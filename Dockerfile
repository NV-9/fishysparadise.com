# Use official Node.js image as the base
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

LABEL org.opencontainers.image.source="https://github.com/NV-9/fishysparadise.com:prod"
LABEL org.opencontainers.image.description="Vite + TypeScript + Lit Application"

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Build the Vite project
RUN npm run build

# Use a lightweight web server to serve the built files
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install a minimal HTTP server
RUN npm install -g serve

# Copy built files from the builder stage
COPY --from=builder /app/dist /app/dist

# Set the command to serve the built application
CMD ["serve", "-s", "dist", "-l", "3000"]

# Expose the application port
EXPOSE 3000
