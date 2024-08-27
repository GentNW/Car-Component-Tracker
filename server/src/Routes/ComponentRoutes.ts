import { Router } from 'express';
import { createComponent, getComponents, updateComponent, deleteComponent } from '../Controllers/ComponentController';

const router = Router();

router.post('/component', createComponent);
router.get('/component', getComponents);
router.put('/component/:id', updateComponent);
router.delete('/component/:id', deleteComponent);

export default router;
