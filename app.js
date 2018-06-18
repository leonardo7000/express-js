require('./utils/db');
const app = require('express')();
const PORT = 9999;
app.listen(PORT);

const testRoute = require('./routes/test');
const vegetablesRoute = require('./routes/vegetables');
const bodyParser = require('body-parser');
const usersRoute = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((request, response, next) => {
    console.log(request.url);
    next();  //передача действий следующей функции
});

app.use('/test/', testRoute);

app.use('/vegetables/', vegetablesRoute);

app.use('/users/', usersRoute);

console.log('text 2');
