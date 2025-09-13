// backend/src/routes/authRoutes.js
const express = require('express');
const { body } = require('express-validator');
const { register, login, forgotPassword } = require('../services/jwtService');
const { validateRequest } = require('../middleware/validateRequest');

const router = express.Router();

router.post('/register',
  [ body('name').notEmpty(), body('email').isEmail(), body('password').isLength({ min: 6 }) ],
  validateRequest,
  register // defined in jwtService for simplicity
);

router.post('/login',
  [ body('email').isEmail(), body('password').notEmpty() ],
  validateRequest,
  login
);

router.post('/forgot-password',
  [ body('email').isEmail() ],
  validateRequest,
  forgotPassword
);

module.exports = router;
