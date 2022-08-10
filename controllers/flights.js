const Flight = require('../models/flights');


module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function show(req, res){
    Flight.findById(req.parms.id, function(err, flightDocumentCreatedInTheDatabase){
        res.render('flights/show', {title: 'Flight Detail', flightDocumentCreatedInTheDatabase});
    });
}


function index(req, res){
    Flight.find({}, function(err, allOfTheFlightsInTheDatabase){
        console.log(allOfTheFlightsInTheDatabase)
        if(err){
            res.send('You have an error trying to find the flights, check the terminal')
        }
    
    res.render('flights/index.ejs', {
        flights: allOfTheFlightsInTheDatabase
    })
})

}

function newFlight(req, res){
    res.render('flights/new.ejs')
}

function create(req, res) {
    console.log(req.body, '<-- This is what was submitted');
    Flight.create(req.body, function(err, flightDocumentCreatedInTheDatabase) {
        if (err) {
            console.log(err, ' <-- Error in the Flights create controller!');
            return res.render('flights/new.ejs')
        }
        console.log(flightDocumentCreatedInTheDatabase, ' <-- Flight created in the database');
        res.redirect('/flights');
    })
}