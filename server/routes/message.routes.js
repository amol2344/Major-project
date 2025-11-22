import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { listMessages } from '../controllers/message.controller.js';

const router = Router();
router.get('/', requireAuth, listMessages);

export default router;


