const mongoose = require('mongoose');

const goalsSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
}, { timestamps: {
        type: String
    }
})
const Goal = mongoose.model('Goal', goalsSchema);

module.exports = Goal;