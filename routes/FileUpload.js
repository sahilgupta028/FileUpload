const express = require('express');
const router = express.Router();

const {localFileUpload} = require("../controllers/fileUpload");

router.post('/localfileUpload', localFileUpload);

module.exports = router;