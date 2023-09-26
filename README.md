# Blog Server

The Blog Server is a nodejs app that allows CRUD operations for the React native app.

## Requirements

-   NodeJS v16
-   Docker or MongoDB

## How to run it locally

1. Spin up a local mongodb database to localhost:27017, you could use docker -> `docker run -d --name blogTest -p 27017:27017 mongo:latest`
2. `npm install`
3. `npm run dev`
