const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");

router.currentService = ServiceFactory.createGoodsInfoService();
router.routerName = "classInfo";


module.exports = router;