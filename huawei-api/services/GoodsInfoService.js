/**
 * 数据表banner_info的操作
 */
const BaseService = require('./BaseService');
const PageList = require("../model/PageList");

class GoodsInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.goods_info;
    }

    //分页查询
    async getGoodsList(pageIndex) {
        // let sql = 'select * from goods_info a INNER JOIN spec_info b on a.id = b.goods_id INNER JOIN photo_info c on c.spec_id = b.id'

        // let result = await this.executeSql(sql);

        // return result;

        let [listData, total_count] = await this.createQuery()
            .innerJoin("spec_info", "goods_info.id = spec_info.goods_id")
            .innerJoin("photo_info", "spec_info.id = photo_info.spec_id")
            .setPageIndex(pageIndex)
            .getPageAndCount();
        return new PageList(pageIndex, total_count, listData);
    }
}

module.exports = GoodsInfoService;