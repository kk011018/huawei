const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");

router.currentService = ServiceFactory.createServeInfoService();
router.routerName = "serveInfo";


module.exports = router;