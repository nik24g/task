const mongoose = require('mongoose');
const schema = mongoose.Schema;

const reviewSchema = new schema({
    review_id: {
        type: String,
        required: true,
    },
    review_title: {
        type: String,
    },
    review_content: {
        type: String,
    }
},{ timestamps: true })

// End of the modal

module.exports = mongoose.model("review", reviewSchema);