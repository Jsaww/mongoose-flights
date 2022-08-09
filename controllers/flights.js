module.exports = {
    new: newFlight,
    create
}


function newFlight(req, res){
    res.render('flights/new.ejs')
}

function create(req, res){
console.log(req.body)


    res.render('Response from the create function for flights')
}