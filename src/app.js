if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");

const notFound = require("./common/not-found")
const errorHandler = require("./common/error-handler")

const moviesRouter = require("./movies/movies.router")

const app = express();

app.use(cors())
app.use(express.json())

app.use("/movies", moviesRouter)

app.use(notFound)
app.use(errorHandler)

module.exports = app;
