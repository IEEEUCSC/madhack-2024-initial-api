const express = require('express');
const user = require('../app/user');
const auth = require('../auth');
// const { authenticateToken } = require('../auth/authMiddleware');

const router = express.Router();

router.get('/all', auth.verifyToken, user.all);
router.get('/:id', user.get);
router.patch('/update/:id', auth.verifyToken, user.update);
router.patch('/update/password/:id', auth.verifyToken, user.change_password);
router.delete('/remove/:id', auth.verifyToken, user.remove);

module.exports = router;
