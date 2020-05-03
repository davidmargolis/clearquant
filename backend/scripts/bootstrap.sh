#!/bin/bash

# run this script from clearquant/backend
cd "$(dirname "$0")"/..

export FLASK_APP=./src/main.py
source $(pipenv --venv)/bin/activate
flask run -h 0.0.0.0
