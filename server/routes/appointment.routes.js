import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { listAppointments } from '../controllers/appointment.controller.js';

const router = Router();
router.get('/', requireAuth, listAppointments);

export default router;


