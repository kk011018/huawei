const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");

router.currentService = ServiceFactory.createPhotoInfoService();
router.routerName = "photo";


module.exports = router;