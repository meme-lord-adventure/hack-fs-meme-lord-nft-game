import express from 'express';
import {getRoutes, getRoutesExplore, getRoutesMembers, getRoutesConnect, postRoutesMembers} from '../controllers/Control.js'

const router = express.Router();

// router.get('/',useRoutes)
router.get('/',getRoutes);
router.get('/explore',getRoutesExplore);
router.get('/connect',getRoutesConnect);
router.get('/members',getRoutesMembers);
router.post('/members',postRoutesMembers)



export default router;