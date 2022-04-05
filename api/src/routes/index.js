const { Router } = require("express");
const countries = require("./country.js");
const activities = require("./activity.js");

const router = Router();

router.use("/countries", countries);
router.use("/activities", activities);

module.exports = router;
