const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/EZ-TRANSIT')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
    fullName: String,
    mobileNumber: String,
    email: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

// Register Route
app.post('/register', async (req, res) => {
    const { fullName, mobileNumber, email, password } = req.body;
    try {
        const user = new User({ fullName, mobileNumber, email, password });
        await user.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(400).send('Error registering user');
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { mobileNumber, password } = req.body;
    try {
        const user = await User.findOne({ mobileNumber });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).send('Server error');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
