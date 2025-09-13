// backend/src/services/jwtService.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { sendEmail } = require('./emailService');

async function register(req, res) {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User exists' });
    user = new User({ name, email, password });
    await user.save();
    const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ user: { id: user._id, name: user.name, email: user.email }, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ user: { id: user._id, name: user.name, email: user.email }, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function forgotPassword(req, res) {
  const { email } = req.body;
  // In a real app, generate a reset token and send via email.
  const resetLink = `https://fixly.app/reset-password?email=${email}`;
  await sendEmail(email, 'Password Reset', `Click here to reset: ${resetLink}`);
  res.json({ message: 'Password reset link sent to your email.' });
}

module.exports = { register, login, forgotPassword };
