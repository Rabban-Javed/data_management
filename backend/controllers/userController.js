// userController.js
const { connection } = require('../config/db');

// Basic authentication (no bcrypt)
const loginUser = (req, res) => {
    const { username, password } = req.body;
    connection.query(
        'SELECT * FROM t_login WHERE f_userName = ? AND f_Pwd = ?',
        [username, password],
        (err, result) => {
            if (err) return res.status(500).json({ error: 'Database error' });
            if (result.length > 0) {
                res.json({ message: 'Login successful', user: result[0] });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        }
    );
};

module.exports = { loginUser };
