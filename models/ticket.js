// Always remember to require Mongoose before anything else, and define Schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Ticket Schema in the Ticket Model.
const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        min: 0
    },
    flight: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}]
    }
})

module.exports = mongoose.model('Ticket', ticketSchema);