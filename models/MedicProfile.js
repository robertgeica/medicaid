const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicProfileSchema = new Schema({
	medicId: {
		type: Object,
		required: true
	},
  profileType: {
    type: String
  },
	image: {
		type: String
	},
	workAdress: {
		type: String,
		required: true
	},
	workingHours: {
		type: String
	},
	appointments: [	],
  tickets: []
});

module.exports = MedicProfile = mongoose.model('medicProfile', MedicProfileSchema);
