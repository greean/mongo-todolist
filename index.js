const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();

require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// ROUTERS
const indexRouter = require('./routes/indexRouter');
const todoRouter = require('./routes/todoRouter');
const removeRouter = require('./routes/removeRouter');
const updateRouter = require('./routes/updateRouter');
const deleteRouter = require('./routes/deleteRouter');

mongoose.connect(`${process.env.databaseURL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({extended: false})); // take everything as a string
app.use(bodyParser.json());  // allow us to read it in json format
app.use(express.static(path.join(__dirname, 'public'))); // style.css

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}))

app.set('view engine', '.hbs');

app.use('/', indexRouter);
app.use('/todolist', todoRouter);
app.use('/remove', removeRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);

//localhost:3010/ - indexRouter
//localhost:3010/todolist/ - todoRouter


app.listen(3010, () => {
    console.log('I am listening on 3010');
})