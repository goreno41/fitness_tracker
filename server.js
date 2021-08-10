const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/api");

const app = express();

const PORT = process.env.PORT || 3000;

