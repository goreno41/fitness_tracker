const Fitness = require("../models/fitness");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.post("/api/workouts", ({ body }), res => {
    Fitness.create({})
        .then((dbFitness) => {
            res.json(dbFitness);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});

