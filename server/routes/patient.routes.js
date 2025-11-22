import express from 'express';
import { protect, restrictTo } from '../middleware/auth.js';
const authRoutes = require('../routes/auth.routes');
const patientRoutes = require('../routes/patient.routes'); // Import the new routes

const app = express();

// All routes below this are now protected and require a valid token
app.use(protect);

// --- Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes); // Use the protected patient routes

// Example: Only a 'doctor' or 'admin' can get all patients
router.get('/', restrictTo('doctor', 'admin'), (req, res) => {
    // Logic to fetch patients from the database
    res.status(200).json({
        status: 'success',
        data: {
            // Replace with actual patient data
            patients: [] 
        }
    });
});

module.exports = app;


