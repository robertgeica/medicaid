const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
	medicId: {
		type: Object,
		required: true
	},
	patientId: {
		type: Object,
		required: true
	},
	ticketRequire: {
		type: String
	},
	ticketStatus: {
		type: String
	},
	ticketDate: {
		type: Date,
    default: Date.now()
	}
});

module.exports = Ticket = mongoose.model('ticket', TicketSchema);
