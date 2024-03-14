const mongoose = require('mongoose')

const EmotionSchema = mongoose.Schema(
    {
        Songname:{
            type:String,
            required:[true, "Please enter a song name"]
        },
        Emotion:{
            type:String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

const Emotion = mongoose.model('Calm', EmotionSchema);

module.exports = Emotion;