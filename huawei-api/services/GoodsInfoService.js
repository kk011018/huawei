/**
 * 数据表banner_info的操作
 */
const BaseService = require('./BaseService');

class GoodsInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.goods_info;
    }

    async getGoodsList() {
        let sql = 'select * from goods_info a INNER JOIN spec_info b on a.id = b.goods_id INNER JOIN photo_info c on c.spec_id = b.id'

        let result = await this.executeSql(sql);

        return result;
    }
}

module.exports = GoodsInfoService;