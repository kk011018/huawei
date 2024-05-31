/**
 * 数据表address_info的操作
 */
const BaseService = require('./BaseService');

class ShoppingCartInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.shopping_cart_info;
    }

    //修改数量减一
    async shuliangjianyi(id) {
        let sql = `update ${this.currentTable} set shuliang=shuliang-1 where id=${id}`;
        return this.executeSql(sql, id);
    }

    //修改数量加一
    async shuliangjiayi(id) {
        let sql = `update ${this.currentTable} set shuliang=shuliang+1 where id=${id}`;
        return this.executeSql(sql, id);
    }
}

module.exports = ShoppingCartInfoService;