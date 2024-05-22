/**
 * 数据表banner_info的操作
 */
const BaseService = require('./BaseService');

class CartInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.cart_info;
    }
}

module.exports = CartInfoService;