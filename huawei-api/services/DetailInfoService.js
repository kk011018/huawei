/**
 * 数据表address_info的操作
 */
const BaseService = require('./BaseService');
const PageList = require("../model/PageList");

class DetailInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.detail_info;
    }

    async getListByPage(pageIndex) {
        // let sql = 'select * from goods_info a INNER JOIN spec_info b on a.id = b.goods_id INNER JOIN photo_info c on c.spec_id = b.id'

        // let result = await this.executeSql(sql);

        // return result;

        let [listData, total_count] = await this.createQuery()
            .setPageIndex(pageIndex)
            .getPageAndCount();
        return new PageList(pageIndex, total_count, listData);
    }
}



module.exports = DetailInfoService;