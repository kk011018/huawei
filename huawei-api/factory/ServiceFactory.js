
        class ServiceFactory {
            static createAddressInfoService(){ 
                    return Reflect.construct(require("../services/AddressInfoService.js"), []);
                }
static createBannerInfoService(){ 
                    return Reflect.construct(require("../services/BannerInfoService.js"), []);
                }
static createBaseService(){ 
                    return Reflect.construct(require("../services/BaseService.js"), []);
                }
static createCartInfoService(){ 
                    return Reflect.construct(require("../services/CartInfoService.js"), []);
                }
static createClassInfoService(){ 
                    return Reflect.construct(require("../services/ClassInfoService.js"), []);
                }
static createDetailInfoService(){ 
                    return Reflect.construct(require("../services/DetailInfoService.js"), []);
                }
static createGoodsInfoService(){ 
                    return Reflect.construct(require("../services/GoodsInfoService.js"), []);
                }
static createGoodsServeInfoService(){ 
                    return Reflect.construct(require("../services/GoodsServeInfoService.js"), []);
                }
static createGoodsTagInfoService(){ 
                    return Reflect.construct(require("../services/GoodsTagInfoService.js"), []);
                }
static createPhotoInfoService(){ 
                    return Reflect.construct(require("../services/PhotoInfoService.js"), []);
                }
static createServeInfoService(){ 
                    return Reflect.construct(require("../services/ServeInfoService.js"), []);
                }
static createShoppingCartInfoService(){ 
                    return Reflect.construct(require("../services/ShoppingCartInfoService.js"), []);
                }
static createTagInfoService(){ 
                    return Reflect.construct(require("../services/TagInfoService.js"), []);
                }
static createUserInfoService(){ 
                    return Reflect.construct(require("../services/UserInfoService.js"), []);
                }
        }

        module.exports = ServiceFactory;
    