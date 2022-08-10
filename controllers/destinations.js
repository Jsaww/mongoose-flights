const Flight = require('../models/flights');

module.exports = {
    create
}

function create(req, res) {
    console.log(req.params.id, ' <-- params flight ID');
    console.log(req.body, ' <-- The contents of the form, the destination information');
    
    Flight.findById(req.params.id, function(err, flightDocument) {
      
        flightDocument.destination.push(req.body);
       
        flightDocument.save(function(err) {
            res.redirect(`/flights/${req.params.id}`);
        })
    })
}