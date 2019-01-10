#!/usr/bin/env bash
docker-compose down
docker rmi portfolio-nguyen-antoine
docker-compose build
docker-compose up -d
