#!/bin/bash
set -e

echo "Stopping containers..."
docker compose down

echo "Building Docker image..."
docker compose build --no-cache

echo "Starting containers..."
docker compose up -d

echo "Container status:"
docker compose ps
