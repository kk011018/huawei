const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");

router.currentService = ServiceFactory.createDetailInfoService();
router.routerName = "detailInfo";


router.get("/getAllList", async (req, resp) => {
    let pageList = await ServiceFactory.createDetailInfoService().getAllList();
    // resp.json(new ResultJson(true, "获取数据成功", pageList))
    resp.json(pageList)
})

//根据id查找
router.get("/getDetailInfoById/:id", async (req, resp) => {
    let id = req.params.id;
    let detailInfo = await ServiceFactory.createDetailInfoService().findById(id)
    resp.json(detailInfo)
})

router.get("/getListByPage/:pageIndex", async (req, resp) => {
    let pageIndex = req.params.pageIndex;
    let pageList = await ServiceFactory.createDetailInfoService().getListByPage(pageIndex)
    // resp.json(new ResultJson(true, "获取数据成功", pageList))
    resp.json(pageList)
})

router.get("/getListByPageOrderByprice/:pageIndex", async (req, resp) => {
    let pageIndex = req.params.pageIndex;
    let pageList = await ServiceFactory.createDetailInfoService().getListByPageOrderByprice(pageIndex)
    // resp.json(new ResultJson(true, "获取数据成功", pageList))
    resp.json(pageList)
})




module.exports = router;