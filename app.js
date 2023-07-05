const express = require('express');
const app = express()
const port = 3001
const host = 'localhost';
//ERROR HANDLERS
const notFoundPage = require('./middlewares/404');
const errorHandler = require('./middlewares/errorHandler');

//ROUTERS
const usersRoute = require('./routers/users');
const guestRoute = require('./routers/guests');
const githubRoute = require('./routers/github');


app.use('/', usersRoute,guestRoute);
app.use('/git', githubRoute);

app.use(notFoundPage);
app.use(errorHandler);


app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})