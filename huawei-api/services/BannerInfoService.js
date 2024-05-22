/**
 * 数据表banner_info的操作
 */
const BaseService = require('./BaseService');

class BannerInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.banner_info;
    }
}

module.exports = BannerInfoService;