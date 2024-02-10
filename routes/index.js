const express = require('express');
const user = require('./user');
const application = require('./application');
const job = require('./job');
const image = require('./image');
const auth = require('./auth');

const router = express.Router();

/* auth routes */
router.use('/auth', auth);
/* user routes */
router.use('/users', user);
/* application routes */
router.use('/application', application);
/* job routes */
router.use('/job', job);
/* images routes */
router.use('/images', image);

module.exports = router;
