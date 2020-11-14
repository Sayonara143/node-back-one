import express from 'express'
const router = express.Router();

import v1Link from './v1/link/router'

router.use(v1Link);

export default router 
