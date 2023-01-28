/*
================================================
* Title: index.js
    Author: Professor Krasso
    Date: 29 January 2023
    Modified By: Anachebe Asomugha
    Description: Index file for WEB 340 
                 Assignment 4.2 - Pets-R-Us, Part 1
================================================                                  
 */
// Import statements
const express = require('express');
const path = require('path');

// Express app variable
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Listen on port 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us: Home',
        pageTitle: 'Pets-R-Us: Home'
    })
});


app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Pets-R-Us: Grooming',
        pageTitle: 'Pets-R-Us: Grooming'
    })
});


app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});

