/*
    Title: customer.js
    Author: Professor Krasso
    Date: 22 February 2023
    Modified By: Anachebe Asomugha
    Description: Creates and exports Customer model
                  for WEB 340 Pets-R-Us project
 */
// Establish a connection to MongoDB through mongoose
const mongoose = require('mongoose');

// Define Customer Schema
const Schema = mongoose.Schema;
let customerSchema = new Schema ( {
    customerID: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }
});

// Export the Customer Schema
module.exports = mongoose.model('Customer', customerSchema);