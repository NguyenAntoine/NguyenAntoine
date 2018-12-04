hugo
docker-compose down
docker rmi portfolio-nguyen-antoine
docker build -t portfolio-nguyen-antoine .
docker-compose up -d
