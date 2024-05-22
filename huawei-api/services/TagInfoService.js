/**
 * 数据表banner_info的操作
 */
const BaseService = require('./BaseService');

class TagInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.tag_info;
    }
}

module.exports = TagInfoService;