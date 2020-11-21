const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Patient = require('../../models/Patient');
const Medic = require('../../models/Medic');

// @route         POST /auth
// @description   Authenticate user, get token
// @access        Public
router.post('/', async (req, res) => {
	const { role, email, password } = req.body;
	console.log(role, email, password);
	try {
		if (role == 'medic') {
			let medic = await Medic.findOne({ email });

			if (!medic) {
				return res.status(400).json({ msg: 'invalid credentials' });
			}
			const isMatch = await bcrypt.compare(password, medic.password);
			if (!isMatch) {
				return res.status(400).json({ msg: 'Invalid credentials' });
			}

			const payload = {
				medic: {
					id: medic._id
				}
			};

			jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 86400 }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});
		}

    if (role == 'patient') {
			let patient = await Patient.findOne({ email });

			if (!patient) {
				return res.status(400).json({ msg: 'invalid credentials' });
			}
			const isMatch = await bcrypt.compare(password, patient.password);
			if (!isMatch) {
				return res.status(400).json({ msg: 'Invalid credentials' });
			}

			const payload = {
				patient: {
					id: patient._id
				}
			};

			jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 86400 }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;