const Flight = require('../models/flights');

module.exports = {
    create
}

function create(req, res) {
    console.log(req.params.id, ' <-- params flight ID');
    console.log(req.body, ' <-- The contents of the form, the destination information');
    // First, find the flight
    Flight.findById(req.params.id, function(err, flightDocument) {
        // Then, add the destination information once you've found the flight.
        flightDocument.destination.push(req.body);
        // Now that you've added the information, save it.
        flightDocument.save(function(err) {
            res.redirect(`/flights/${req.params.id}`);
        })
    })
}