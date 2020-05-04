#!/bin/bash

brew upgrade
brew install node 

npm install @angular/cli rxjs-compat @angular/animations @angular/flex-layout mathjax
ng add @angular/material @angular/cdk
