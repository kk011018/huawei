const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");
const ResultJson = require("../model/ResultJson");

router.currentService = ServiceFactory.createGoodsInfoService();
router.routerName = "goodsInfo";


module.exports = router;

router.get("/getGoodsList/:pageIndex", async (req, resp) => {
    let pageIndex = req.params.pageIndex;
    let pageList = await ServiceFactory.createGoodsInfoService().getGoodsList(pageIndex);
    // resp.json(new ResultJson(true, "获取数据成功", pageList))
    resp.json(pageList)
})