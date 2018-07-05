FROM node:10-alpine
RUN apk update
RUN apk add alpine-sdk
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
EXPOSE 3000
CMD ["sh", "/app/docker.sh"]
