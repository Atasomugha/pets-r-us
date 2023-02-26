/*
    Title: appointments.js
    Author: Professor Krasso
    Date: 22 February 2023
    Modified By: Anachebe Asomugha
    Description: Creates and exports Appointment model
                  for WEB 340 Pets-R-Us project
 */

// Establish a connection to MongoDB through mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Appointment Schema
const appointmentSchema = new Schema( {
    userName: { type: String, required: true, unique: true },
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    service: { type: String, required: true, unique: true }
});

// Export the Appointment Schema
module.exports = mongoose.model('Appointment', appointmentSchema);


