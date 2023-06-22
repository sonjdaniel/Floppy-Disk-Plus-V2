# Floppy-Disk-Plus-V2
![mit](https://img.shields.io/badge/license-MIT-blue)


## Description
Gotta Catch 'Em All! We created a turn-based game called Poke Battle. To start battling, choose your starter pokemon: Bulbasaur, Squirtle, or Charmander. Defeat monsters on different levels to beat the game. We wanted to create a game where you can battle monsters from other fictional worlds--not just from the Pokemon world. The game utitlizes the Pokemon API to grab the sprite images of the pokemon. 

## Installation
First, clone the repository to your local machine in terminal.
``` console
git clone git@github.com:sonjdaniel/Floppy-Disk-Plus-V2.git
```
Our application uses npm packages that need to be installed.
``` console
npm i
```
Make sure to create an .env file that includes:
```
DB_NAME=pokemon_db
DB_USER=root
DB_PASSWORD=yourpassword
```
Next, you have to source the data in the mysql shell by going into the db folder.
``` console
cd db
mysql -u root -p
```
Once you are in mysql, run:
``` console
source schema.sql
```
Type ```quit``` to exit out of mysql.
Don't forget to seed the data as well.
``` console
npm run seed
```

## Usage
To use this application, type in terminal: 
``` console
npm run start
```
Then open the application in browser at http://localhost:3001/

## Built With
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node](https://nodejs.org/en/)
- [NPM Packages](https://www.npmjs.com)
    > bcrypt, connect-session-sequelize, dotenv, express, express-session, handlebars, mysql2, sequelize, nodemon
- [GoogleFonts](https://fonts.google.com/)

## Credits

With the help of instruction and guidance of the staff of the UofM coding boot camp, nor without the resources at W3 and the Mozilla Developers Network. We was able to write the code the best we can.
