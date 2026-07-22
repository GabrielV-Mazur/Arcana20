import { Router } from 'express';
import tableController from '../controllers/table.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';
import { requireRole } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/tables', requireRole('ADMIN', 'MASTER'), tableController.create);
router.get('/tables', requireRole('ADMIN', 'MASTER', 'USER'), tableController.list);
router.get('/tables/:id', requireRole('ADMIN', 'MASTER', 'USER'), tableController.get);
router.put('/tables/:id', requireRole('ADMIN', 'MASTER'), ensureValidId, tableController.update);
router.delete('/tables/:id', requireRole('ADMIN', 'MASTER'), ensureValidId, tableController.remove);

export default router;
