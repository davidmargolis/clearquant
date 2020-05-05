#!/bin/bash

brew upgrade
brew install node 

npm install @angular/cli rxjs-compat @angular/animations @angular/flex-layout mathjax ngx-mathjax quantum-circuit
ng add @angular/material @angular/cdk
