const express = require('express');
const router = express.Router();

// Dashboard route
router.get('/', (req, res) => {
    res.json({ message: "Welcome to the Dashboard!" });
});

module.exports = router;
