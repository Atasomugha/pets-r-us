/*
================================================
* Title: index.js
    Author: Professor Krasso
    Date: 29 January 2023
    Modified By: Anachebe Asomugha
    Description: Index file for WEB 340 
                 Pets-R-Us Assignment
================================================                                  
 */
// Import statements
const express = require('express');
const path = require('path');

// Express app variable
const app = express();

// View engine set to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// public directory path with images and stylesheets
app.use(express.static(path.join(__dirname, 'public')));

// sets listening port to 3000
const PORT = process.env.PORT || 3000;

// renders home page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us: Home',
        pageTitle: 'Pets-R-Us: Home'
    })
});

//renders grooming page
app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Pets-R-Us: Grooming',
        pageTitle: 'Pets-R-Us: Grooming'
    })
});

//renders training page
app.get('/training', (req, res) => {
    res.render('training', {
        title: 'Pets-R-Us: Training',
        pageTitle: 'Pets-R-Us: Training'
    })
});

//renders boarding page
app.get('/boarding', (req, res) => {
    res.render('boarding', {
        title: 'Pets-R-Us: Boarding',
        pageTitle: 'Pets-R-Us: Boarding'
    })
});

// Listen on port 3000
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});

