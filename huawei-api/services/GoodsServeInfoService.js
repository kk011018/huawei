/**
 * 数据表banner_info的操作
 */
const BaseService = require('./BaseService');

class GoodsServeInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.goods_serve_info;
    }
}

module.exports = GoodsServeInfoService;