// Before anything else, require the Ticket and Flight Models below. 
const Ticket = require('../models/ticket');
const Flight = require('../models/flights');
const {all} = require('../routes');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log(flight, ' <-- This is the flight')
        res.render(`tickets/new`, { 
            title: "New Ticket",
            flight
        });
    });
};

function create(req, res) {
    req.body.flight = req.params.id
    console.log(req.body.flight, ' <-- Flight Property')
    // Creating a new ticket using req.body
    const ticket = new Ticket(req.body)
    ticket.save(function(err) {
        console.log('This is the ticket', ticket)
        res.redirect(`/flights/${req.params.id}`)
    })
}
