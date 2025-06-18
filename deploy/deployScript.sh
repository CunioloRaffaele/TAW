#!/bin/bash

REPO_URL="https://github.com/CunioloRaffaele/TAW.git"
PROJECT_DIR="$HOME/TAW"

# Clone or update the repository
if [ -d "$PROJECT_DIR/.git" ]; then
  echo "Repository exists. Pulling latest changes..."
  cd "$PROJECT_DIR"
  git pull origin main
else
  echo "Cloning repository..."
  git clone "$REPO_URL" "$PROJECT_DIR"
  cd "$PROJECT_DIR"
fi

# Go to deploy directory
cd deploy

# Build and start containers
docker compose down
docker compose pull
docker compose up --build -d

echo "Deployment complete."