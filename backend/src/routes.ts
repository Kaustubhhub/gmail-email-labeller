import express from 'express'
import * as controllers from './controllers'
const router = express.Router()

router.get('/mail/user/:email', controllers.getUser)
router.get('/mail/drafts/:email', controllers.getUserDrafts)
router.get('/mail/read/:email/:messageId', controllers.readMail)
router.get('/mail/list/:email', controllers.getMails)
router.get('/mail/labels/:email', controllers.getLabels)

export default router