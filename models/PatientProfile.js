const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientProfileSchema = new Schema({
	patientId: {
		type: Object,
		required: true
	},
	image: {
		type: String
	},
	adress: {
		type: String,
		required: true
	},
	gender: {
		type: String
	},
  bloodType: {
    type: String
  },
  insurancePlan: {
    type: String
  },
  allergies: [],
  medications: [],
  symptoms: [],

	tickets: [
		
	]
});

module.exports = PatientProfile = mongoose.model('patientprofile', PatientProfileSchema);
