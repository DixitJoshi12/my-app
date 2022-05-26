const express = require('express');

const employeeRouter = require('./employeeRouter/employee.router');

const api = express.Router();

api.use(employeeRouter);
// To change the url 
// api.use('/empolyee',employeeRouter);
module.exports = api;

// /details/:id