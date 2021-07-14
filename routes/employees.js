const express = require('express')
const router = express.Router()
const Employee =  require('../models/Employee')

// Create a new Employee
router.post('/', async (req,res)=>{
    const employee = new Employee({
        firstName: req.body.firstName,
        secondName:req.body.secondName,
        department:req.body.department,
        dateEmployed:req.body.dateEmployed,
    })

    try {
        const savedEmployee = await employee.save()
        res.json(savedEmployee)
    }
    catch(err){
        res.json({message: err})
    };

});

// Gets all Employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees)
    } catch(err) {
        res.json({message: err})

    } 
})


// GET a specific Employee
router.get('/:employeeId', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeId)
        res.json(employee)
    }catch(err) {
        res.json({message:err})
    }
})

// Update an Employee
router.patch('/:employeeId', async (req, res) => {
    try {
        const updatedEmployee = await Employee.updateOne(
            {_id: req.params.employeeId}, 
            { $set: { firstName: req.body.firstName, 
                      secondName: req.body.secondName, 
                      department:req.body.department,
                      dateEmployed:req.body.dateEmployed
                    }}
            );
            res.json(updatedEmployee)
    } catch (err) {
        res.json({ message:err })
    }    
})

// Delete an Employee
router.delete('/:employeeId', async (req, res) => {
    try{
        const removedEmployee = await Employee.deleteOne({_id:req.params.employeeId})
        res.json(removedEmployee)
    }
    catch(err) {
        res.json({message: err})
    }
    
})

module.exports = router;