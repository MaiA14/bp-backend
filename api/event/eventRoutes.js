const express = require("express");
const { getEventsTypeCount, getWordsCount } = require("./eventController");
const router = express.Router();

router.get("/events-type-count", getEventsTypeCount);
router.get("/words-count", getWordsCount);

module.exports = router;