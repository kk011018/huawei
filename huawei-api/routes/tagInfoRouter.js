const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");

router.currentService = ServiceFactory.createTagInfoService();
router.routerName = "tagInfo";


module.exports = router;