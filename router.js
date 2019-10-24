const express = require('express');
const router = express.Router();
// const pageController = require('./controller/pageController');
// const adminUserController = require('./controller/adminUserController');
router.get('/',(req,res) =>{
    pageController.getIndex(req,res);
});
router.get('/index',(req,res) =>{
    pageController.getIndex(req,res);
});

module.exports = router;