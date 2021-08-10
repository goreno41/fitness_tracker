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

FitnessSchema.virtual("totalDuration").get(function () {
    const duration = this.exercises.reduce((acc, cur) => {
        return acc + cur.duration;
    }, 0);

    return duration;
});





const Fitness = mongooose.model("Fitness", FitnessSchema);

module.exports =  Fitness;