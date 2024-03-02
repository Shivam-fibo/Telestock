const Subscriber = require('../models/Subscriber');

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const subscriber = new Subscriber({ email });

    await subscriber.save();


    res.status(201).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


function isValidEmail(email) {
  // Implement your email validation logic here
  return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
}

module.exports = {
  subscribe,
};
