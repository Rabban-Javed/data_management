// employeeRoutes.js
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Get all employees
router.get('/', employeeController.getEmployees); // Ensure the route is correctly defined

// Create a new employee
router.post('/', employeeController.createEmployee); // Use '/' to match the endpoint in your API call

// Update an employee
router.put('/:id', employeeController.updateEmployee);

// Delete an employee
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
