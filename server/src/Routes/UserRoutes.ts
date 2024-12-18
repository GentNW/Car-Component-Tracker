import { Router } from 'express';
import { createUser, getUsers,getUser, updateUser, deleteUser, getUserCars } from '../Controllers/UserController'
//const verifyJWT = require('../middleware/verifyJWT')

// router.use(verifyJWT)

const router = Router();

router.post('/user', createUser);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.get('/user/cars',getUserCars)
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;
