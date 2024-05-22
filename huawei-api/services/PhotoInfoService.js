/**
 * 数据表banner_info的操作
 */
const BaseService = require('./BaseService');

class PhotoInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.photo_info;
    }
}

module.exports = PhotoInfoService;