const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const MessageModel = require('./models/MessageSchema');
const AppointmentModel = require('./models/AppointmentSchema');
const UserModel = require('./models/User');
const { Users } = require('lucide-react');
const SECRET_KEY = ""; //enter your secret key 
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/syp');

// **User Registration**
app.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({ email, password: hashedPassword });

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT Token
        const token = jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

        res.json({ token, userId: user._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/message', (req, res) => {
    const { name, email, message } = req.body;
    MessageModel.create({ name, email, message });

    console.log(req.body);
    res.send('Message received');
});

app.post('/appointmentUser', (req, res) => {
    const { name, gender, age, doctor, date, time, reason } = req.body;
    AppointmentModel.create({ name, gender, age, doctor, date, time, reason });

    console.log(req.body);
    res.send('Message received');
});

app.get('/appointmentUser', async (req, res) => {
    try {
        const appointments = await AppointmentModel.find({});
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    AppointmentModel.findById(id)
        .then(appointment => res.json(appointment))
        .catch(err => res.json(err));
});

app.put('/UpdateappointmentUser/:id',  (req, res) => {
        const id = req.params.id;
        AppointmentModel.findByIdAndUpdate({_id: id}, {
            name: req.body.name, 
            gender: req.body.gender, 
            age: req.body.age, 
            doctor: req.body.doctor, 
            date: req.body.date, 
            time: req.body.time, 
            reason: req.body.reason})
        .then(appointment => res.json(appointment))
        .catch(err => res.json(err));
    })

    
app.delete('/deleteUser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAppointment = await AppointmentModel.findByIdAndDelete(id);

        if (!deletedAppointment) {
            return res.status(404).json({ error: "Appointment not found!" });
        }

        res.json({ message: "Appointment deleted successfully!", deletedAppointment });
    } catch (err) {
        console.error("Delete Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
