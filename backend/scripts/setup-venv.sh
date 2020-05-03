#!/bin/bash

# run this script from clearquant/backend
cd "$(dirname "$0")"/..

pip3 install pipenv

# setup virtual environment
pipenv --three
pipenv install sqlalchemy psycopg2-binary flask marshmallow flask-cors
