const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    owner: String,
    code : {
        type: String,
        unique: true,
        required: true
    },
    users: [String],
    query: [String],
})

module.exports = mongoose.model('Group', groupSchema)
