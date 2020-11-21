const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const MedicProfile = require('../../models/MedicProfile');
const PatientProfile = require('../../models/PatientProfile');
const Medic = require('../../models/Medic');
const Patient = require('../../models/Patient');
const Ticket = require('../../models/Ticket');

// @route         POST /ticket
// @description   Add new ticket
router.post('/', auth, async (req, res) => {
	// medicId, ticketRequire, ticketDate
	const { patientId, medicId, ticketRequire, ticketStatus, ticketDate } = req.body;
	// console.log(medicId, ticketRequire, ticketStatus, patientId);

	try {
		// const newTicket = { medicId, patientId, ticketRequire, ticketStatus, ticketDate: Date.now() };

		const patient = await PatientProfile.find({ patientId });
		const medic = await MedicProfile.find({ medicId });
		let ticket = await Ticket.find();
		ticket = new Ticket({
			medicId,
			patientId,
			ticketRequire,
			ticketStatus,
			ticketDate
		});

		await ticket.save();
		
		patient[0].tickets = [ ...patient[0].tickets, ticket._id ];
		patient[0].save();

		medic[0].tickets = [ ...medic[0].tickets, ticket._id ];
		medic[0].save();

		console.log(ticket);
		res.status(200).json({ ticket: 'added ticket' });
	} catch (error) {
		console.log(error);
		res.status(400).send('failed to add new ticket');
	}
});

// @route         POST /ticket/:id
// @description   Update a ticket
router.post('/:id', auth, async (req, res) => {

		const ticketId = req.params.id;
		const { medicId, patientId, ticketRequire, ticketStatus, ticketDate } = req.body;
	try {
		let ticket = await Ticket.findById(ticketId);
		if (!ticket) res.status(404).send('no medic or patient found');
		ticket.ticketStatus = ticketStatus;
		
		ticket.save();

		res.status(200).json({ ticket: 'ticket updated' });
	} catch (error) {
		console.log(error);
		res.status(400).send('failed to edit ticket')
	}
});
module.exports = router;
