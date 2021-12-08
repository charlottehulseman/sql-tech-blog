const express = require('express');
const router = express.Router();

// Get cookies

router.get('/', (req, res) => {
    res.json(req.session);
})

module.exports = router;