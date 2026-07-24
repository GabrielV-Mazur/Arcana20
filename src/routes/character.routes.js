import { Router } from 'express';
import characterController from '../controllers/character.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';
import { requireRole, authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/characters', authMiddleware, requireRole('ADMIN', 'MASTER', 'USER'), characterController.create);
router.get('/characters', authMiddleware, requireRole('ADMIN', 'MASTER', 'USER'), characterController.list);
router.get('/characters/:id', authMiddleware, requireRole('ADMIN', 'MASTER', 'USER'), ensureValidId, characterController.get);
router.put('/characters/:id', authMiddleware, requireRole('ADMIN', 'MASTER', 'USER'), ensureValidId, characterController.update);
router.delete('/characters/:id', authMiddleware, requireRole('ADMIN', 'MASTER', 'USER'), ensureValidId, characterController.remove);

export default router;
