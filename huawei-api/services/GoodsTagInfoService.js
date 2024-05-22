/**
 * 数据表banner_info的操作
 */
const BaseService = require('./BaseService');

class GoodsTagInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.goods_tag_info;
    }
}

module.exports = GoodsTagInfoService;