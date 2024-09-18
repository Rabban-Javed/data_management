const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const { connectDb } = require('./config/db');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

// Connect to DB
connectDb();

// Routes
// Remove this line
app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);


// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
