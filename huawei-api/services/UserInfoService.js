/**
 * 数据表banner_info的操作
 */
const BaseService = require('./BaseService');

class UserInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.user_info;
    }
}

module.exports = UserInfoService;