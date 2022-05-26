const {getAllEmployees,getEmployee} = require('../../models/employeeModel/employee.model');

function httpgetAllEmployees(req,res){
    return res.status(200).json(getAllEmployees()) ;
}

function httpgetEmployee(req,res){
    return res.status(200).json(getEmployee(parseInt(req.params.id)));
}

function httpAddNewEmployee(req,res){
    const v =  req.body;
    console.log(typeof(v),v);
    return res.json(v);
}
module.exports = {
    httpgetAllEmployees,
    httpgetEmployee,
    httpAddNewEmployee
}