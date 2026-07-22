import { Router } from 'express';
import characterController from '../controllers/character.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';
import { requireRole } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/characters', requireRole('ADMIN', 'MASTER', 'USER'), characterController.create);
router.get('/characters', requireRole('ADMIN', 'MASTER', 'USER'), characterController.list);
router.get('/characters/:id', requireRole('ADMIN', 'MASTER', 'USER'), characterController.get);
router.put('/characters/:id', requireRole('ADMIN', 'MASTER', 'USER'), ensureValidId, characterController.update);
router.delete('/characters/:id', requireRole('ADMIN', 'MASTER', 'USER'), ensureValidId, characterController.remove);

export default router;
