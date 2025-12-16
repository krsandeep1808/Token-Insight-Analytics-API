const router = require("express").Router();
const { getTokenInsight } = require("../controllers/token.controller");

router.post("/:id/insight", getTokenInsight);
module.exports = router;
