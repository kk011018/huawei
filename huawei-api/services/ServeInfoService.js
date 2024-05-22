/**
 * 数据表banner_info的操作
 */
const BaseService = require('./BaseService');

class ServeInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.serve_info;
    }
}

module.exports = ServeInfoService;