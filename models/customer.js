/*
    Title: customer.js
    Author: Professor Krasso
    Date: 22 February 2023
    Modified By: Anachebe Asomugha
    Description: Creates and exports Customer model
                  for WEB 340 Pets-R-Us project
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let customerSchema = new Schema ( {
    customerID: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Customer', customerSchema);