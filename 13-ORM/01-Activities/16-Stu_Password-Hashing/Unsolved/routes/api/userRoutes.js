const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
router.post('/login', async (req, res) => {
  //the try block keeps your error contained
  try {
    //using the email the user inputed to find the existing USER that we have in the system
    const userData = await User.findOne({ where: { email: req.body.email } });
    //if the email is not found, then the information is invalid
    if (!userData) {
      res.status(404).json({ message: `User doens't exist. Please try again!` });
      return;
    }
    //compare the password user input, with the hashed password we have in system
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    //if it isn't in the system or doesn't match what we have then user need will need to log in again.
    if (!validPassword) {
      res.status(400).json({ message: `Incorrect password. Please try again!` });
      return;
    }
    //or if matches, then user will be logged in
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
