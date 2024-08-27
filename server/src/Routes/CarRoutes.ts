import { Router } from 'express'
import {createCar,updateCar,getCars,deleteCar } from '../Controllers/CarController'

const router = Router();

router.post('/car', createCar);
router.get('/car', getCars);
router.put('/car/:id', updateCar);
router.delete('/car/:id', deleteCar);

export default router;