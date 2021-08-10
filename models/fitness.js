const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FitnessSchema = new Schema(
    {
        day: {type: Date, default: () => new Date() },
        exercises: [
            {
                type: {
                    type: String,
                },
                name: {
                    type: String,
                },
                duration: {
                    type: Number,
                },

            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);





const Fitness = mongooose.model("Fitness", FitnessSchema);

module.exports =  Fitness;