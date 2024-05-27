const express = require('express');
const router = express.Router();
const ServiceFactory = require("../factory/ServiceFactory");

router.currentService = ServiceFactory.createShoppingCartInfoService();
router.routerName = "shoppingCartInfo";

module.exports = router;

router.get("/getAllList", async (req, resp) => {
    let pageList = await ServiceFactory.createShoppingCartInfoService().getAllList();
    // resp.json(new ResultJson(true, "获取数据成功", pageList))
    resp.json(pageList)
})

router.delete("delete/:id", async (req, resp) => {
    let id = req.params.id;
    let result = await ServiceFactory.createShoppingCartInfoService().deleteById(id);
    resp.json(result)
})

//新增
router.post("/add", async (req, resp) => {
    let shoppingCartInfo = req.body;
    let result = await ServiceFactory.createShoppingCartInfoService().add(shoppingCartInfo);
    resp.json(result)
})