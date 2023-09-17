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
            version: '3'
            services:
            app:
                image: node:14 # You can specify a different Node.js version if needed
                container_name: app_container # You can change the container name
                volumes:
                - ./:/app # Mount your local app directory into the container
                ports:
                - "3000:3000" # Map the container's port 3000 to the host's port 3000
                working_dir: /app # Set the working directory in the container
                command: tail -f /dev/null
        
        - run command: docker exec -it js_web_container /bin/bash
        - run command: npm init -y
            - it will generate package.json file
        - run command: npm i express
            - it will generate package-lock.json

        - direct command to access docker information or run command inside docker container
            - docker compose exec app npm -v
