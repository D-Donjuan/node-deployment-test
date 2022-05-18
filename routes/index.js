const express = require('express');
const router = express.Router();

//Test Page
// GET /
router.get('/', (req, res)=>{
    res.render('test')
});

module.exports = router;