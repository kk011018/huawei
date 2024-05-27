/**
 * 数据表address_info的操作
 */
const BaseService = require('./BaseService');

class ShoppingCartInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.shopping_cart_info;
    }
}

module.exports = ShoppingCartInfoService;