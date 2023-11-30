# TestDevRepublic

1) Get repo from github: 

2) install node module in Main folder and frontend folder.

3) After installing node module run project from main folder "npm run dev"

4) If you get empty data then you need to run "npm run data:import" for save dummy data on dabase.

5) If you want to destroy that data then you need to run "npm run data:destroy" for remove all the data from database.

6) you need to create .env file and add this constant variable

NODE_ENV="NODE_ENV"
PORT=5000
MONGO_URI="MONGO_URI"
JWT_SECRET=secret