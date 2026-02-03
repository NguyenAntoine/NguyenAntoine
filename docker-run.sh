#!/usr/bin/env bash
# Build and run portfolio website with Docker

echo "Stopping container..."
docker compose down

echo "Removing old image..."
docker rmi portfolio-nguyen-antoine:latest || true

echo "Building image..."
docker compose build

echo "Starting container..."
docker compose up -d

echo "Waiting for service to start..."
sleep 5

echo "Checking container status..."
docker compose ps

echo "Build and deployment complete!"
