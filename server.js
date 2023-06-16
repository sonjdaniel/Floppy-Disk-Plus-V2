const path = require('path'); //guide express.static to public folder
const express = require('express'); //express server
const session = require('express-session'); //import express-session
const exphbs = require('express-handlebars'); // import express-handlebars
const routes = require('./controllers'); //import from controllers routes
const sequelize = require('./config/connection'); //import connection to db
// const exphbs = require('express-handlebars'); //if needed, to use with /utils
const SequelizeStore = require('connect-session-sequelize')(session.Store); //storing sessions

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
