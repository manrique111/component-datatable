#!/bin/bash

echo "install package ..."
npm install
echo "Init Angular ..."
ng serve --host 0.0.0.0 --port 4200 --poll=100
