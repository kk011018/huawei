/**
 * 数据表banner_info的操作
 */
const BaseService = require('./BaseService');

class ClassInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.class_info;
    }
}

module.exports = ClassInfoService;