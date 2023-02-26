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
const fs = require('fs');
const mongoose = require('mongoose');

const Customer = require('./models/customer');
const Appointment = require('./models/appointments'); 


// Express app variable
const app = express();

// Establishes connection to mongoDB
const CONN = 'mongodb+srv://web340_admin:ata32321@bellevueuniversity.jcwrynv.mongodb.net/web340DB';

// Delivers messages for Successful connection or Error
mongoose.connect(CONN).then(() => { 
    console.log('Connection to the database was successful\n  If you see this message it means you were able to connect to your MongoDB Atlas cluster');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
});

// View engine set to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// public directory path with images and stylesheets
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/site", express.static(path.join(__dirname, "public/stylesheets")));

// sets listening port to 3000
const PORT = process.env.PORT || 3000;

// renders Home page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us: Home',
        pageTitle: 'Pets-R-Us: Home'
    });
});

//renders Grooming page
app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Pets-R-Us: Grooming',
        pageTitle: 'Pets-R-Us: Grooming'
    });
});

//renders Training page
app.get('/training', (req, res) => {
    res.render('training', {
        title: 'Pets-R-Us: Training',
        pageTitle: 'Pets-R-Us: Training'
    });
});

//renders Boarding page
app.get('/boarding', (req, res) => {
    res.render('boarding', {
        title: 'Pets-R-Us: Boarding',
        pageTitle: 'Pets-R-Us: Boarding'
    });
});

//renders Registration page
app.get('/register', (req, res) => {
    res.render('register', {
        title: 'Pets-R-Us: Register',
        pageTitle: 'Pets-R-Us: Register'
    });
});

// Routing customer HTTP POST requests
app.post('/customers', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.customerID);
    console.log(req.body.email);
    const newCustomer = new Customer({
    customerID: req.body.customerID,
    email: req.body.email
});
    console.log(newCustomer);

// Routing to landing page if there is no error
    Customer.create(newCustomer, function(err, customer) {
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

// Gets customer list from mongoDB database
    app.get('/customers', (req, res) => {
        Customer.find({}, function(err, customer)  {
            if (err) {
                console.log(err);
                next(err);
            } else {
                res.render('customer-list', {
                    title: 'Pets-R-Us: Customer List',
                    pageTitle: 'Pets-R-Us: Customer List',
                    customer: customer
                });
            };
        });
    }); 

    // Appointments
    
    app.get('/booking', (req, res) => {
        let jsonFile = fs.readFileSync('./public/data/services.json');
        let services = JSON.parse(jsonFile);
      
        console.log(services);
      
        res.render('booking', {
            title: 'Pets-R-Us: Book An Appointment',
            pageTitle: 'Pets-R-Us: Book An Appointment',
            services: services
        });
      });
      
      // does the POST action for the booking process when the user clicks on the Book Appointment button
      app.post('/booking', (req, res, next) => {
        const newAppointment = new appointment({
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            service: req.body.service
        })
        // create a new appointment and log an error if there is one - if not, render index page
        appointment.create(newAppointment, function(err, appointment) {
            if (err) {
                console.log(err);
                next(err);
            } else {
                res.render('index', {
                    title: 'Pets-R-Us: Home',
                    pageTitle: 'Pets-R-Us: Home'
                })
            }
        })
      })

/*
// renders Appointments page
app.get("/appointments", (req, res) => {
    const jsonFile = fs.readFileSync("./public/data/services.json");
    const services = JSON.parse(jsonFile);
  
    console.log(services);
  
    res.render("booking", {
      title: "Pets-R-Us: My Appointments",
      pageTitle: "Pets-R-Us My Appointments",
      service: services,
    });
  });    

// Parses data from json file
app.post('/appointment', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.email);
    console.log(req.body.service);
    
    const newAppointment = new Appointment({
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    service: req.body.service
});
    console.log(newAppointment);

   

// Routing to landing page if there is no error
    Appointment.create(newAppointment, function(err, appointment) {
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
*/ 

// Listen on port 3000
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});

