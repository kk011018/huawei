const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");

router.currentService = ServiceFactory.createBannerInfoService();
router.routerName = "bannerInfo";


module.exports = router;