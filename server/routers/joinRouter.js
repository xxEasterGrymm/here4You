const router = require("express").Router();
const joinUser = require("../models/joinModel");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
    try {
        const { name } = req.body;

        const newJoinUser = new joinUser({
            name
        });

        const savedJoinUser = await newJoinUser.save();

        res.json(savedJoinUser);
    } catch(err) {
        console.error(err);
        res.status(500).send();
    }
});

module.exports = router;