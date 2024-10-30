const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const router = express.Router();


app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());
app.use(globalMiddleware);
app.use(require('./routes'));

app.use((req, res, next) => {
    const error = new Error('404 Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    console.log('Error', error);

    if(error.status) {
        return res.status(error.status).send(`<h1>${error.message}</h1>`);
    }

    res.status(500).send('Something went wrong');
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

function globalMiddleware(req, res, next){
    console.log(`${req.method} - ${req.url}`);
    console.log(`I am a global middleware`);
    next();
}

function localMiddleware(req, res, next){
    console.log('I am a local middleware');
    next();
}