/**
 * 数据表address_info的操作
 */
const BaseService = require('./BaseService');

class AddressInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.address_info;
    }
}

module.exports = AddressInfoService;