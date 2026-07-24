import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';
import { requireRole, authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/users', userController.create);
router.get('/users', authMiddleware, requireRole('ADMIN', 'MASTER', 'USER'), userController.list);
router.get('/users/:id', authMiddleware, requireRole('ADMIN', 'MASTER', 'USER'), ensureValidId, userController.get);
router.put('/users/:id', authMiddleware, requireRole('ADMIN'), ensureValidId, userController.update);
router.delete('/users/:id', authMiddleware, requireRole('ADMIN'), ensureValidId, userController.remove);

export default router;
