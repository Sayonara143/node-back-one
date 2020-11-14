import express from 'express'
const router = express.Router();

import v1Redirect from './redirect'
import v1CreateLink from './createLink'
import v1ViewCount from './viewCount'

router.use(v1CreateLink);
router.use(v1Redirect);
router.use(v1ViewCount);

export default router 