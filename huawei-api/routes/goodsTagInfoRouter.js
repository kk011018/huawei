const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");

router.currentService = ServiceFactory.createGoodsTagInfoService();
router.routerName = "goodsTagInfo";


module.exports = router;