const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");

router.currentService = ServiceFactory.createGoodsServeInfoService();
router.routerName = "goodsServeInfo";


module.exports = router;