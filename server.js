const express = require('express');
const app = express();
port = 5000;
//const port = process.env.PORT || 5000;
app.get('/', (req, res) => res.send('Hello World!'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.get('/rate', function (req, res) {
    var weight = req.query.weight;
    var type = req.query.type;
    rate = getRate(weight, type);
    packageData = {weight: weight, type: type, rate: rate};
    res.render('rate', packageData);
})

function getRate(weight, type) {
    if ((type == 'stamped' || type == 'metered') && weight > 3.5) {
        type = 'flats';
    }
    switch (type) {
        case 'stamped':
            if (weight <= 1) {
                rate = 0.55;
            } else if (weight <= 2) {
                rate = 0.70;
            } else if (weight <= 3) {
                rate = 0.85;
            } else {
                rate = 1.00;
            }
            break;
        case 'metered':
            if (weight <= 1) {
                rate = 0.50;
            } else if (weight <= 2) {
                rate = 0.65;
            } else if (weight <= 3) {
                rate = 0.80;
            } else {
                rate = 0.95;
            }
            break;
        case 'flats':
            if (weight <= 1) {
                rate = 1.00;
            } else if (weight <= 2) {
                rate = 1.15;
            } else if (weight <= 3) {
                rate = 1.30;
            } else if (weight <= 4) {
                rate = 1.45;
            } else if (weight <= 5) {
                rate = 1.60;
            } else if (weight <= 6) {
                rate = 1.75;
            } else if (weight <= 7) {
                rate = 1.90;
            } else if (weight <= 8) {
                rate = 2.05;
            } else if (weight <= 9) {
                rate = 2.20;
            } else if (weight <= 10) {
                rate = 2.35;
            } else if (weight <= 11) {
                rate = 2.50;
            } else if (weight <= 12) {
                rate = 2.65;
            } else {
                rate = 2.80;
            }
            break;
        case 'retail':
            if (weight <= 4) {
                rate = 3.66;
            } else if (weight <= 7) {
                rate = 4.39;
            } else if (weight <= 12) {
                rate = 5.19;
            } else {
                rate = 5.71;
            }
    }
    return rate;
}
app.listen(port, () => console.log('Server on port ' + port))