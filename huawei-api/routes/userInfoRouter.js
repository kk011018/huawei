const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");

router.currentService = ServiceFactory.createUserInfoService();
router.routerName = "userInfo";


module.exports = router;