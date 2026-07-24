import { Router } from 'express';
import tableController from '../controllers/table.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';
import { requireRole, authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/tables', authMiddleware, requireRole('ADMIN', 'MASTER'), tableController.create);
router.get('/tables', authMiddleware, requireRole('ADMIN', 'MASTER', 'USER'), tableController.list);
router.get('/tables/:id', authMiddleware, requireRole('ADMIN', 'MASTER', 'USER'), tableController.get);
router.put('/tables/:id', authMiddleware, requireRole('ADMIN', 'MASTER'), ensureValidId, tableController.update);
router.delete('/tables/:id', authMiddleware, requireRole('ADMIN', 'MASTER'), ensureValidId, tableController.remove);

export default router;
