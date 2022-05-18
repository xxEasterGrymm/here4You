const mongoose = require("mongoose");

const joinSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

const joinUser = mongoose.model("join", joinSchema);

module.exports = joinUser;