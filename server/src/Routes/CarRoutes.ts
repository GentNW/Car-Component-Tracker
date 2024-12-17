import { Router } from 'express'
import {createCar,updateCar,getCars,deleteCar, getCar, getCarComponents } from '../Controllers/CarController'

const router = Router();

router.post('/car', createCar);
router.get('/cars', getCars);
router.get('/car/:id', getCar)
router.get('/car/components',getCarComponents)
router.put('/car/:id', updateCar);
router.delete('/car/:id', deleteCar);

export default router;