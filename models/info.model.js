const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    greetings: {
        type: String
    },
    events: {
        type: String
    },
    about: {
        type: String
    }
});

mongoose.model('info', InfoSchema);