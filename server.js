const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample users array (In production, you would use a database)
const users = [];

// Register API endpoint
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;

  // Check if all fields are provided
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  // Simple email validation (In production, use a more robust method)
  if (!email.includes('@')) {
    return res.status(400).json({ message: "Invalid email" });
  }

  // Save user data (In production, save to a database)
  users.push({ name, email, password });

  res.status(200).json({ message: "Registration successful" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
