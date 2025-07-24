const express = require('express');
const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        service: 'API',
        timestamp: new Date().toISOString()
    });
});

// Sample API endpoint
router.get('/hello', (req, res) => {
    res.json({ 
        message: 'Hello from the backend!',
        timestamp: new Date().toISOString()
    });
});

// Get app info
router.get('/info', (req, res) => {
    res.json({
        name: 'My Fullstack App API',
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString()
    });
});

// Sample data endpoint
router.get('/data', (req, res) => {
    const sampleData = [
        { id: 1, name: 'Item 1', description: 'First sample item' },
        { id: 2, name: 'Item 2', description: 'Second sample item' },
        { id: 3, name: 'Item 3', description: 'Third sample item' }
    ];
    
    res.json({
        data: sampleData,
        count: sampleData.length,
        timestamp: new Date().toISOString()
    });
});

module.exports = router;