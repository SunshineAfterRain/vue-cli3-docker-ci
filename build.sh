docker build -t web .
docker run -v $PWD/dist:/usr/src/app/dist web