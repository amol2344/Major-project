import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { listDoctors } from '../controllers/doctor.controller.js';

const router = Router();
router.get('/', requireAuth, listDoctors);

export default router;


