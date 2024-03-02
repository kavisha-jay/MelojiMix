const mongoose = require('mongoose')

const CalmSchema = mongoose.Schema(
    {
        Songname:{
            type:String,
            required:[true, "Please enter a product name"]
        },
        Artist:{
            type:String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

const Calm = mongoose.model('Calm', CalmSchema);

module.exports = Calm;