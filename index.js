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
'use-strict';
// Import statements
const express = require('express');
const path = require('path');
const Customer = require('./models/customers');
const mongoose = require('mongoose');

const conn = 'mongodb+srv://web340_admin:ata32321@bellevueuniversity.jcwrynv.mongodb.net/web340DB';

mongoose.connect(conn).then(() => { //establishes connection to mongoDB
    console.log('Connection to the database was successful');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
});

// Express app variable
const app = express();

// View engine set to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// public directory path with images and stylesheets
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true })); // added during week 6 assignment
app.use(express.json());

// sets listening port to 3000
const PORT = process.env.PORT || 3000;

// renders home page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us: Home',
        pageTitle: 'Pets-R-Us: Home'
    });
});

//renders grooming page
app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Pets-R-Us: Grooming',
        pageTitle: 'Pets-R-Us: Grooming'
    });
});

//renders training page
app.get('/training', (req, res) => {
    res.render('training', {
        title: 'Pets-R-Us: Training',
        pageTitle: 'Pets-R-Us: Training'
    });
});

//renders boarding page
app.get('/boarding', (req, res) => {
    res.render('boarding', {
        title: 'Pets-R-Us: Boarding',
        pageTitle: 'Pets-R-Us: Boarding'
    });
});

//renders registration page
app.get('/register', (req, res) => {
    res.render('register', {
        title: 'Pets-R-Us: Register',
        pageTitle: 'Pets-R-Us: Register'
    });
});

app.post('/customers', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.customerId);
    console.log(req.body.email);

const customerId = req.body.customerId;
const email = req.body.email;
const newCustomer = new Customer({
    customerId,
    email
});
    console.log(newCustomer);
    Customer.create(newCustomer, function(err,customer) {
        if(err) {
            console.log(err);
            next(err);
        }
        else {
            res.render('index', {
                title: 'Pets-R-Us: Home',
                pageTitle: 'Pets-R-Us: Home'
            }); 
        }
    });
});    

// Listen on port 3000
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});

