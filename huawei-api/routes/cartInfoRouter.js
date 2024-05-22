const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");

router.currentService = ServiceFactory.createCartInfoService();
router.routerName = "cartInfo";


module.exports = router;