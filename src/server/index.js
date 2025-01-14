const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'futurepulse_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Create feedback table if it doesn't exist
pool.execute(`
  CREATE TABLE IF NOT EXISTS feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

// POST endpoint to handle feedback submissions
app.post('/api/feedback', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const [result] = await pool.promise().execute(
      'INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
      id: result.insertId
    });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit feedback'
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});