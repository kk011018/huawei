const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");

router.currentService = ServiceFactory.createAddressInfoService();
router.routerName = "addressInfo";


module.exports = router;