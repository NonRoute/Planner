# Planner
Planner web application using MERN stack (MongoDB, Express, React, NodeJS)

## How to use the app

### Home page
- View planner and tasks in each days <br/>
<img height="300" src="images/planner.png"/> <br/>

- Type a number to view specific days. <br/>
<img height="300" src="images/planner_search.png"/> <br/>
<img height="300" src="images/planner_search1.png"/> <br/>

- Click the arrow to view the planner for the previous or next 7 days <br/>
<img height="300" src="images/planner_arrow.png"/> <br/>
<img height="300" src="images/planner_arrow1.png"/> <br/>

### Search page
- Type a word to view days that have relevant tasks <br/>
<img height="300" src="images/search.png"/> <br/>
<img height="300" src="images/search1.png"/> <br/>

### Edit page
- Edit task in specific day and time <br/>
<img height="300" src="images/edit.png"/> <br/>

### Admin page
- Click to delete all planner data <br/>
<img height="300" src="images/admin.png"/> <br/>

## How to run the app
1. Download the code
2. Create .env file in /server/.env with
```
DATABASE=[MongoDB Connection String URI]
PORT=5500
```
3. Create .env file in /client/.env
```
REACT_APP_API=http://localhost:5500/api
```
3. Navigate to inside the project folder on terminal
Run npm install
Run npm start
View the app at http://localhost:3000/
