const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Patient = require('../../models/Patient');
const Medic = require('../../models/Medic');
require('dotenv').config();

// @route         POST /Register
// @description   Register
// @access        Public
router.post('/', async (req, res) => {
	const { role, email, password, firstName, lastName, phoneNumber } = req.body;
  
	try {
		let medic = await Medic.findOne({ email });
		let patient = await Patient.findOne({ email });
    let payload = {};

		if (medic || patient) {
			return res.status(400).json({ msg: 'User already exists.' });
		}

		if (role == 'medic') {
			medic = new Medic({
        role,
				email,
				password,
        firstName,
        lastName,
        phoneNumber
			});

			const salt = await bcrypt.genSalt(10);
			medic.password = await bcrypt.hash(password, salt);

			await medic.save();

			payload = {
				medic: {
					id: medic._id
				}
			};
		};

		if (role == 'patient') {
			patient = new Patient({
        role,
				email,
				password,
        firstName,
        lastName,
        phoneNumber
			});

			const salt = await bcrypt.genSalt(10);
			patient.password = await bcrypt.hash(password, salt);

			await patient.save();

			payload = {
				patient: {
					id: patient._id
				}
			};
		};

    console.log(payload);
		jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 86400 }, (err, token) => {
			if (err) throw err;
			res.json({ token });
		});


	} catch (err) {
		console.log(err.message);
		res.status(500).send('server error');
	}
});

module.exports = router;
