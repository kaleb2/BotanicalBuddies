# BotanicalBuddies
A web application for connecting botanical buddies

run "docker compose up --build" from \BotanicalBuddies\ will start up the following:
* A postgres data base container for users, plants, threads, posts, and journal entries.
* A MINIO container for images.
* A .NET micro service for managing user journals.
* A .NET micro service for managing forums.

run "npm install", and "npm run dev" from \BotanicalBuddies\botanicalbackend\ to start up the Express backend

run "npm install", "npm run build", and "npm run start" from \BotanicalBuddies\botanicalfrontend\ to start up the React frontend

Access the front end from localhost:3000