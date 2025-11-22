import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { listExercises } from '../controllers/exercise.controller.js';

const router = Router();
router.get('/', requireAuth, listExercises);

export default router;


