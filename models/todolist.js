const mongoose = require('mongoose');

const List = new mongoose.Schema({
    item: { type: String, required: true },
    complete: { type: Boolean, required: true }

}, {
    toObject: {virtuals: true}
})

module.exports = mongoose.model('todolist', List);