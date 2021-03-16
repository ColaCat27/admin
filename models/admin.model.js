const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    login: {
        type: String
    },
    password: {
        type: String
    }
});

mongoose.model('admin', AdminSchema);