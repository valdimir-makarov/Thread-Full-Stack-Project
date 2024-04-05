import express from 'express';
import { singUpUser } from '../controller/userController.js';

const router = express.Router(); // Use express.Router() to create a router

router.post('/singedup', singUpUser);

export default router; // Export the router
