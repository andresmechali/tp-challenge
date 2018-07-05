#!/bin/bash

npm install &&
npm rebuild node-sass --force &&
npm run build &&
npm start
