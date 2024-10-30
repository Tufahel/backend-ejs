const fs = require('fs');

exports.homeController = (req, res) => {
    fs.readFile('./pages/index.html', (err, data) => {
        if(err) {
            console.log('Error', err);
            res.send('<h1>Something is error.</h1>');
        }
        else {
            res.write(data);
            res.end();
        }
    })
}

exports.aboutController = (req, res) => {
    res.send(`<h1>This is About route.</h1>`);
}

exports.faqController =  (req, res) => {
    res.send(`<h1>This is FAQ route.</h1>`);
}