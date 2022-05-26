const express = require('express');

const {httpgetAllEmployees,httpgetEmployee,httpAddNewEmployee} = require('./employee.controller');

const employeeRouter = express.Router();

employeeRouter.get('/',httpgetAllEmployees);
employeeRouter.get('/e/:id',httpgetEmployee);
employeeRouter.post('/e/add',httpAddNewEmployee);

module.exports =  employeeRouter;