# JS-FRAMEWORK-001
## Requirement To Create A Basic Framework
    Javascript Basics

## Architecture
    Rendering (render display content on window)-> View
    Data Handling (Set Data to view) -> Model
    Event Handling -> Controller

### first index page rendered

### docker implementation
    created Dockerfile
        - add FROM node:7.7.2-alpine
        - run command: docker build .
            ignored commands: 
            - View summary of image vulnerabilities and recommendations → docker scout quickview
            - docker login
            - docker images
        - add more line
            WORKDIR /usr/app
            # COPY package.json .
            RUN npm install --quiet
            COPY . .

    create docker-compose.yml file
        - touch docker-compose.yml
        - add below content
            version: '3.8'
            services:
                app:
                    build:
                    context: ./
                    target: dev
                    volumes:
                    - .:/src
                    command: npm run start:dev
                    ports:
                    - "3000:3000"
                    environment:
                    NODE_ENV: development
                    DEBUG: nodejs-docker-express:*
        - touch Dockerfile
        - add below content
            FROM node:16-alpine as base

            WORKDIR /src
            COPY package*.json /
            EXPOSE 3000

            FROM base as production
            ENV NODE_ENV=production
            RUN npm ci
            COPY . /
            CMD ["node", "bin/www"]

            FROM base as dev
            ENV NODE_ENV=development
            RUN npm install -g nodemon && npm install && npm init -y && npm i express
            COPY . /
            CMD ["nodemon", "bin/www"]
        
        - touch .dockerignore
        - add below content
            .git
            node_modules
        - run command & check container name: docker ps
        - run command: npm init -y
            - it will generate package.json file
        - run command: npm i express
            - it will generate package-lock.json

        - direct command to access docker information or run command inside docker container
            - docker compose exec app npm -v
        - generate package.json file (not required)
            - docker compose exec app npm init -y 
        - install express package (not required)
            - docker compose exec app npm i express

### server running
    docker compose exec app node server.js
    open in browser window localhost:3000