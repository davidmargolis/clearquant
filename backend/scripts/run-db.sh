#!/bin/bash
CONTAINER=clearquant-db

docker stop ${CONTAINER}
docker rm ${CONTAINER}

docker run --name ${CONTAINER} \
    -p 5432:5432 \
    -e POSTGRES_DB=clearquant \
    -e POSTGRES_PASSWORD=EN.605.728.81.SP20 \
    -d postgres
