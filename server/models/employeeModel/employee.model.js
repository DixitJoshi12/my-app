const Employees = [
    {
        id : 1,
        Name : 'Dixit Joshi',
        education : 'B.Tect',
        age : 29
    },
    {
        id : 2,
        Name : 'Karan Adhikari',
        education : 'B.Tect',
        age : 28
    },
    {
        id : 3,
        Name : 'Jatin Joshi',
        education : 'BSC',
        age : 22
    },
    // {
    //     id : 4,
    //     name : 'Lalit Mehta'
    // },
    // {
    //     id : 5,
    //     name : 'Gaurav Sati'
    // }
]

function getAllEmployees(){
    return Employees;
}
function getEmployee(id){
    console.log("id : "+id)
    return Employees.find(item => item.id === id);
}
module.exports = {
    getAllEmployees,
    getEmployee
};