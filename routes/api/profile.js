const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const MedicProfile = require('../../models/MedicProfile');
const PatientProfile = require('../../models/PatientProfile');
const Medic = require('../../models/Medic');
const Patient = require('../../models/Patient');

// @route         GET /profile/:id
// @description   Test
router.get('/:id', auth, async (req, res) => {
	try {
		let id = await req.params.id;
		const medicProfile = await MedicProfile.findById(id);
		const patientProfile = await PatientProfile.findById(id);

		if (medicProfile) {
			res.json(medicProfile);
		} else {
			res.json(patientProfile);
		}
	} catch (error) {
		res.status(400).send('error getting the profile');
	}
});

// @route         POST /profile
// @description   Add profile
router.post('/', auth, async (req, res) => {
	try {

		if (req.body.profileType == 'medic') {
			const medic = await Medic.findById(req.body.id).select('-password');
			let medicProfile = await new MedicProfile(req.body);
			medicProfile.medicId = req.body.medicId;
			medicProfile.save();

			res.status(200).json({ medicProfile: 'added medic profile' });
		}

    if (req.body.profileType == 'patient') {
			const patient = await Patient.findById(req.body.id).select('-password');
			let patientProfile = await new PatientProfile(req.body);
			patientProfile.patientId = req.body.patientId;
			patientProfile.save();

			res.status(200).json({ patientProfile: 'added patient profile' });
		}
	} catch (error) {
		console.log(error);
		res.status(400).send('failed to add a profile');
	}
});

// @route         POST /profile
// @description   Update profile
router.post('/:id', auth, async (req, res) => {
  try {
    if (req.body.profileType == 'medic') {
      console.log(req.params);
      const medicProfile = await MedicProfile.findById(req.params.id).select('-password');

      console.log(medicProfile);
      if (!medicProfile) res.status(404).send('no profile found');

      medicProfile.image = req.body.image;
      medicProfile.workAdress = req.body.workAdress;
      medicProfile.workingHours = req.body.workingHours;
      medicProfile.appointments = req.body.appointments;
			medicProfile.tickets = req.body.tickets;
			await medicProfile.save();

			res.status(200).json({ medicProfile: 'updated medic profile' });
    }
    if (req.body.profileType == 'patient') {
      console.log(req.params);
      const patientProfile = await PatientProfile.findById(req.params.id).select('-password');

      console.log(patientProfile);
      if (!patientProfile) res.status(404).send('no profile found');


      patientProfile.image = req.body.image;
      patientProfile.gender = req.body.gender;
      patientProfile.adress = req.body.adress;
      patientProfile.bloodType = req.body.bloodType;
      patientProfile.insurancePlan = req.body.insurancePlan;
      patientProfile.alergies = req.body.alergies;
      patientProfile.medications = req.body.medications;
      patientProfile.symptoms = req.body.symptoms;
      patientProfile.tickets = req.body.tickets;
			await patientProfile.save();

			res.status(200).json({ patientProfile: 'updated patient profile' });
    }


  } catch (error) {
    console.log(error);
    res.status(400).send('error. can not edit this profile');
  }
})


module.exports = router;
