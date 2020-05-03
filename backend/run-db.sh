#!/bin/bash

docker run --name clearquant-db \
    -p 5432:5432 \
    -e POSTGRES_DB=clearquant \
    -e POSTGRES_PASSWORD=EN.605.728.81.SP20 \
    -d postgres
