import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { listPlans } from '../controllers/treatment.controller.js';

const router = Router();
router.get('/', requireAuth, listPlans);

export default router;


