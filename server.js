// Import dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './environment.env' }); // load environment.env file

// Initialize express app
const app = express();

// Environment variables
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());              // Allow cross-origin requests
app.use(express.json());      // Parse incoming JSON requests

// Routes
const userRoutes = require('./routes/user');  // Import user routes
app.use('/api/users', userRoutes);            // /api/users → userRoutes se handle hoga
// Root test route
app.get('/', (req, res) => {
  res.send('✅Hello Server is running successfully with environment.env!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
