const { connection } = require('../config/db');

// Get all employees
const getEmployees = (req, res) => {
    connection.query('SELECT * FROM t_Employee', (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
};

// Create a new employee
const createEmployee = (req, res) => {
    const { f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_Course } = req.body;

    if (!f_Name || !f_Email || !f_Mobile || !f_Designation || !f_gender || !f_Course) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const query = `INSERT INTO t_Employee (f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_Course)
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;

    connection.query(query, [f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_Course], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Failed to create employee' });
        }

        res.status(201).json({ message: 'Employee created successfully', employeeId: result.insertId });
    });
};

// Update an employee
const updateEmployee = (req, res) => {
    const { f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_Course } = req.body;
    const { id } = req.params;

    const query = `UPDATE t_Employee 
                   SET f_Image = ?, f_Name = ?, f_Email = ?, f_Mobile = ?, f_Designation = ?, f_gender = ?, f_Course = ?
                   WHERE f_Id = ?`;

    connection.query(query, [f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_Course, id], (err) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Failed to update employee' });
        }

        res.json({ message: 'Employee updated successfully' });
    });
};

// Delete an employee
const deleteEmployee = (req, res) => {
    const { id } = req.params;

    connection.query('DELETE FROM t_Employee WHERE f_Id = ?', [id], (err) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Failed to delete employee' });
        }

        res.json({ message: 'Employee deleted successfully' });
    });
};

module.exports = { getEmployees, createEmployee, updateEmployee, deleteEmployee };
