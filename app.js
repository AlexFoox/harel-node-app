const express = require('express');
const bodyParser = require('body-parser');
const config =require('config');
const path =require('path');
const mysql = require('../course-app/middlewares/mysql');

//ERROR HANDLERS
const notFoundPage = require('./middlewares/404');
const errorHandler = require('./middlewares/errorHandler');

//ROUTERS
const usersRoute = require('./routers/users');
const guestRoute = require('./routers/guests');
const githubRoute = require('./routers/github');


const app = express();
const port = config.get("app.port");
const host = config.get("app.host");

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//bodyParser same like EXPRESS
console.log(process.env.NODE_ENV);
console.log('path  - >> ' ,__dirname,'views');
//console.log(config.get("mysql"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(mysql);

app.use('/', usersRoute,guestRoute);
app.use('/git', githubRoute);

app.use(notFoundPage);
app.use(errorHandler);


app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})