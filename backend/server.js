const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
const sampleData = {
  status: 'success',
  message: 'Backend is working!',
  timestamp: new Date().toISOString(),
  data: [
    { id: 1, name: 'Item 1', description: 'This is the first item' },
    { id: 2, name: 'Item 2', description: 'This is the second item' },
    { id: 3, name: 'Item 3', description: 'This is the third item' },
  ],
  serverInfo: {
    version: '1.0.0',
    environment: 'development',
    apiEndpoint: '/api/data'
  }
};

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Backend API',
    endpoints: {
      data: 'GET /api/data',
      health: 'GET /api/health'
    }
  });
});

// API endpoint to get data
app.get('/api/data', (req, res) => {
  res.json(sampleData);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `The endpoint ${req.method} ${req.path} does not exist`
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✅ Backend server running at http://localhost:${PORT}`);
  console.log(`📍 API Data endpoint: http://localhost:${PORT}/api/data`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
  console.log('\nPress Ctrl+C to stop the server\n');
});
