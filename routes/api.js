const Fitness = require("../models/fitness");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.post("/api/workouts", ({ body }, res) => {
    Fitness.create({})
        .then((dbFitness) => {
            res.json(dbFitness);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {

    Fitness.findOneAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } },
        { new: true }

    )
        .then((dbFitness) => {
            res.json(dbFitness);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Fitness.findOneAndUpdate({})
        .then((dbFitness) => {
            res.json(dbFitness);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Fitness.findOneAndUpdate({})
        .limit(9)
        .then((dbFitness) => {
            res.json(dbFitness);
        })
        .catch((err) => {
            res.json(err);
        })
});

module.exports = router;