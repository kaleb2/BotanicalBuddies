# BotanicalBuddies
A web application for connecting botanical buddies

First! rename /BotanicalBuddies/botanicalbackend/.env.example -> /BotanicalBuddies/botanicalbackend/.env

run "docker compose up --build" from /BotanicalBuddies/ will start up the following:
* A postgres data base container for users, plants, threads, posts, and journal entries.
* A MINIO container for images.
* A .NET micro service for managing user journals.
* A .NET micro service for managing forums.

*Windows users: If you run into any issues with building the .NET micro services, please check the entrypoint.sh scripts for any Windows carriage return characters that may be added by git. You can remove these by using a text editor like Notepad++ and replacing all instances of '\n\r' with '\n'*

run "npm install", "npm run seed", and "npm run dev" from /BotanicalBuddies/botanicalbackend/ to start up the Express backend

run "npm install", "npm run build", and "npm run start" from /BotanicalBuddies/botanicalfrontend/ to start up the React frontend

Access the front end from localhost:3000