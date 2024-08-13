// controllers/topupController.js
const Topup = require('../models/Topup');

exports.topUp = async (req, res) => {
  const { amount, accountType, accountNumber } = req.body;
  const userId = req.user.id;

  try {
    const topup = new Topup({
      user: userId,
      amount,
      accountType,
      accountNumber
    });

    await topup.save();

    res.json({ msg: 'Topup request sent.', topup });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
