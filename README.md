# Frontend

SkipRope service frontend

## Running dev instance

1. `cd src`
2. `npm install`
3. `npm start`

For using nodemon:

1. `cd src`
2. `sudo npm install -g nodemon`
3. `nodemon`

## Making & running a Docker image

1. Build Docker image with `docker build -t skiprope/frontend . `
2. Run Docker image `docker run --name skiprope-frontend --publish 3000:3000 --detach skiprope/frontend`

## Test login  
username: `user`  
password: `123`  
